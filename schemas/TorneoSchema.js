const schemaGuardarTorneo = {
    "properties": {
        "nombre": {
            "type": "string",
            "minLength": 5,
            "maxLength": 30
        },
        "tipo-torneo": {
            "type": "string"
        },
        "numero-participantes": {
            "type": "integer",
            "minimum": 2,
            "maximum": 128
        },
        "numero-byes": {
            "type": "integer",
            "minimum": 0,
            "maximum": 63
        },
        "numero-fases": {
            "type": "integer",
            "minimum": 1,
            "maximum": 7
        },
        "numero-juegos-totales": {
            "type": "integer",
            "minimum": 1,
            "maximum": 127
        },
        "numero-juegos-primera-fase": {
            "type": "integer",
            "minimum": 1,
            "maximum": 64
        },
        "usuario-creacion": {
            "type": "string",
            "minLength": 6,
            "maxLength": 12
        },
        "fecha-creacion": {
            "type": "string",
            "format": "date-time"
        },
        "participantes": {
            "type": "array",
            "items": {
                "type": "string"
            }
        }
    },
    "required": [
        "nombre",
        "tipo-torneo",
        "numero-participantes",
        "numero-byes",
        "numero-fases",
        "numero-juegos-totales",
        "numero-juegos-primera-fase",
        "usuario-creacion",
        "fecha-creacion",
        "participantes"
    ]
};

module.exports = {
    schemaGuardarTorneo
};