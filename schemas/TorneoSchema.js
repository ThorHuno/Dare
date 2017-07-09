const schemaGuardarTorneo = {
    "properties": {
        "Nombre": {
            "type": "string",
            "minLength": 5,
            "maxLength": 30,
            "requiredMessage": "El nombre del torneo es requerido"
        },
        "TipoTorneo": {
            "type": "string"
        },
        "NumeroParticipantes": {
            "type": "integer",
            "minimum": 2,
            "maximum": 128,
            "invalidMessage": "El número de participantes debe ser mayor o igual a 2 y menor o igual a 128",
            "requiredMessage": "El número de participantes es requerido"
        },
        "NumeroByes": {
            "type": "integer",
            "minimum": 0,
            "maximum": 63,
            "invalidMessage": "El número de byes debe ser mayor o igual a 0 y menor o igual a 63",
            "requiredMessage": "El número de byes es requerido"
        },
        "NumeroFases": {
            "type": "integer",
            "minimum": 1,
            "maximum": 7,
            "invalidMessage": "El número de fases debe ser mayor o igual a 1 y menor o igual a 7",
            "requiredMessage": "El número de fases es requerido"
        },
        "NumeroJuegosTotales": {
            "type": "integer",
            "minimum": 1,
            "maximum": 127,
            "invalidMessage": "El número de juegos totales debe ser mayor o igual a 1 y menor o igual a 127",
            "requiredMessage": "El número de juegos totales es requerido"
        },
        "NumeroJuegosPrimeraFase": {
            "type": "integer",
            "minimum": 1,
            "maximum": 64,
            "invalidMessage": "El número de juegos en la primera debe ser mayor o igual a 1 y menor o igual a 6" +
                    "4",
            "requiredMessage": "El número de juegos en las primera fase es requerido"
        },
        "UsuarioCreacion": {
            "type": "string",
            "minLength": 6,
            "maxLength": 12
        },
        "FechaCreacion": {
            "type": "string",
            "format": "date-time",
            "invalidMessage": "La fecha no tiene el formato correcto",
            "requiredMessage": "La fecha es requerida"
        },
        "Participantes": {
            "type": "array",
            "items": {
                "type": "string"
            }
        },
        "EsPublico": {
            "type": "boolean",
            "default": 'false'
        },
        "Juego": {
            "type": "string",
            "maxLength": 12
        }
    },
    "required": [
        "Nombre",
        "TipoTorneo",
        // "NumeroParticipantes",
        // "NumeroByes",
        // "NumeroFases",
        // "NumeroJuegosTotales",
        // "NumeroJuegosPrimeraFase",
        // "UsuarioCreacion",
        "FechaCreacion",
        // "Participantes",
        // "EsPublico"
    ]
};

module.exports = {
    schemaGuardarTorneo
};