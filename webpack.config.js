const PATH = require('path');
var webpack = require('webpack');

module.exports = {
    entry: [
        'script-loader!jquery/dist/jquery.min.js', 'script-loader!bootstrap/dist/js/bootstrap.min.js', './app/components/app.jsx'
    ],
    externals: {
        jquery: 'jQuery'
    },
    plugins: [new webpack.ProvidePlugin({'$': 'jquery', 'jQuery': 'jquery'})],
    output: {
        path: PATH.join(__dirname, 'public', 'dist'),
        filename: 'bundle.js',
        publicPath: '/dist/'
    },
    resolve: {
        modules: [
            __dirname, 'node_modules'
        ],
        alias: {
            /******Componentes******/
            ListadoParticipantes: 'app/components/listadoParticipantes.jsx',
            Participante: 'app/components/participante.jsx',
            FormularioTorneo: 'app/components/formularioTorneo.jsx',
            ErroresSummary: 'app/components/erroresSummary.jsx',
            Error: 'app/components/error.jsx',
            /******Redux******/
            Constantes: 'app/constants/constants.js',
            ParticipantesReducer: 'app/reducers/participantes.reducer.jsx',
            ParticipantesAction: 'app/actions/participantes.action.jsx',
            TiposTorneosReducer: 'app/reducers/tiposTorneos.reducer.jsx',
            TiposTorneosAction: 'app/actions/tiposTorneos.action.jsx',
            CrudTorneoReducer: 'app/reducers/crudTorneo.reducer.jsx',
            CrudTorneoAction: 'app/actions/crudTorneo.action.jsx',

            ConfigureStore: 'app/store/store.config.jsx'
        },
        extensions: ['.js', '.jsx']
    },
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015', 'stage-0']
                },
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/
            }, {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            }, {
                test: /\.(woff|woff2|eot|ttf|svg)$/,
                loader: 'url-loader?limit=100000'
            }, {
                test: /\.(jpg|png)$/,
                loader: 'file-loader',
                options: {
                    name: '[path][name].[hash].[ext]'
                },
                exclude: /(node_modules|bower_components)/
            }
        ]
    }
};