var express = require('express');
var bodyParser = require('body-parser');
var server = require('http').createServer(app);
var io = require('socket.io')(server);
// var Ajv = require('ajv');
var jsen = require('jsen');

var dbConfig = require('./database.config.js');
var CustomError = require('./CustomError.js');
var {schemaGuardarTorneo} = require('./schemas/TorneoSchema.js');

//Creo el sevidor
var app = express();

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({extended: true})); // support encoded bodies

//inicializo firebase
const DBREF = dbConfig();
// var TipostorneosRef = DBREF.child('TiposTorneo');
// TipostorneosRef.push({Nombre: 'Eliminación simple'});Configuro la base de
// datos dbConfig(); Configuración de conexión segura https
const PUERTO = process.env.PORT || 4000;

app.use(function (req, res, next) {
    if (req.header['x-forwarded-proto'] === 'https') {
        res.redirect('http://' + req.hostname + req.url)
    } else {
        next();
    }
});

//Directorio de los archivos estáticos css, js, html
app.use(express.static(__dirname + '/public'));

//Rutas
var rutas = express.Router();

rutas.post("/GuardarTorneo", (req, res) => {
    try {
        var torneosRef = DBREF.child('Torneos');
        var datos = req.body;

        datos.FechaCreacion = new Date().toISOString();

        // var ajv = new Ajv({allErrors: true}); var validar =
        // ajv.validate(schemaGuardarTorneo, datos);
        var validador = jsen(schemaGuardarTorneo, {greedy: true});
        var validar = validador(datos);

        if (validar) {
            /**
             * Cuando no tengo conexión a internet
             */
            // res.json({Estado: true});
            torneosRef
                .push(datos)
                .then((snapshot) => {
                    res.json({estado: true, mensaje: 'Torneo creado satisfactoriamente'});
                });
        } else {
            res
                .status(500)
                .json(validador.errors);
        }
    } catch (ex) {
        var error = new CustomError('Ha ocurrido un error creando el torneo', {});
        res
            .status(error.status)
            .json(error);
    }
});

rutas.get('/ObtenerTiposTorneo', (req, res) => {
    /**
     * Cuando no tengo conexión a internet
     */
    // res.json([     {         Id: 1,         Valor: 'Simple eliminación'     }, {
    //        Id: 2,         Valor: 'Doble eliminación'     } ]);

    DBREF
        .child('TiposTorneo')
        .once("value")
        .then((snapshot) => {
            var datos = snapshot.val();
            var datosEnArray = [];

            Object
                .keys(datos)
                .forEach((elemento) => {
                    datosEnArray.push({Id: elemento, Valor: datos[elemento].Nombre});
                });

            res.json(datosEnArray);
        });
})

app.use("/api", rutas);

//Levanto el servidor
app.listen(PUERTO, function () {
    console.log('Express server está corriendo en el puerto ' + PUERTO);
});