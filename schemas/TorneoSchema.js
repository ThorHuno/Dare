const schemaGuardarTorneo = {
    "properties": {
        "Nombre": {
            "type": "string",
            "minLength": 5,
            "maxLength": 30
        },
        "TipoTorneo": {
            "type": "string"
        },
        "NumeroParticipantes": {
            "type": "integer",
            "minimum": 2,
            "maximum": 128
        },
        "NumeroByes": {
            "type": "integer",
            "minimum": 0,
            "maximum": 63
        },
        "NumeroFases": {
            "type": "integer",
            "minimum": 1,
            "maximum": 7
        },
        "NumeroJuegosTotales": {
            "type": "integer",
            "minimum": 1,
            "maximum": 127
        },
        "NumeroJuegosPrimeraFase": {
            "type": "integer",
            "minimum": 1,
            "maximum": 64
        },
        "UsuarioCreacion": {
            "type": "string",
            "minLength": 6,
            "maxLength": 12
        },
        "FechaCreacion": {
            "type": "string",
            "format": "date-time"
        },
        "Participantes": {
            "type": "array",
            "items": {
                "type": "string"
            }
        },
        "EsPublico": {
            "type": "bool"
        },
        "Juego": {
            "type": "string",
            "maxLength": 12
        }
    },
    "required": [
        "Nombre",
        "TipoTorneo",
        "NumeroParticipantes",
        "NumeroByes",
        "NumeroFases",
        "NumeroJuegosTotales",
        "NumeroJuegosPrimeraFase",
        "UsuarioCreacion",
        "FechaCreacion",
        "Participantes",
        "EsPublico"
    ]
};

module.exports = {
    schemaGuardarTorneo
};