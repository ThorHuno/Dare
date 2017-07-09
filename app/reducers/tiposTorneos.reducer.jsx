import {types} from 'Constantes'

export var TiposTorneos = (state = {
    obteniendoTiposTorneo: false,
    tiposTorneo: [
        {
            Id: 0,
            Valor: 'Seleccione'
        }
    ],
    error: {}
}, action) => {
    switch (action.type) {
        case types.OBTENIENDO_TIPOS_TORNEO:
            return {
                ...state,
                obteniendoTiposTorneo: action.obteniendoTiposTorneo
            }
        case types.TIPOS_TORNEO_RECIBIDOS:
            return {
                ...state,
                tiposTorneo: [
                    ...state.tiposTorneo,
                    ...action.tiposTorneo.data
                ]
            }
        case types.ERROR_OBTENIENDO_TIPOS_TORNEO:
            return {
                ...state,
                error: action.errorObteniendoTiposTorneo
            }
        default:
            return state;
    }
}