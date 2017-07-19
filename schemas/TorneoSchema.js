const schemaGuardarTorneo = {
    "properties": {
        "Nombre": {
            "type": "string",
            "minLength": 5,
            "maxLength": 30,
            "invalidMessage": "El nombre del torneo debe tener al menos 5 caractéres y no exceder los 30",
            "requiredMessage": "El nombre del torneo es requerido"
        },
        "TipoTorneo": {
            "type": "string"
        },
        "FechaCreacion": {
            "type": "string",
            "format": "date-time",
            "invalidMessage": "La fecha no tiene el formato correcto",
            "requiredMessage": "La fecha es requerida"
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
        "FechaCreacion",
    ]
};

module.exports = {
    schemaGuardarTorneo
};