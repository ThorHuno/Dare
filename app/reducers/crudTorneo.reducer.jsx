import {types} from 'Constantes'

export var CrudTorneo = (state = {
    estaGuardando: false,
    guardado: false,
    error: {}
}, action) => {
    switch (action.type) {
        case types.GUARDAR_TORNEO:
            switch (action.datos.estatus) {
                case 'request':
                    return {
                        ...state,
                        estaGuardando: action.datos.estaGuardando
                    }
                case 'exito':
                    return {
                        ...state,
                        guardado: action.datos.guardado,
                        estaGuardando: action.datos.estaGuardando
                    }
                case 'error':
                    return {
                        ...state,
                        guardado: action.datos.guardado,
                        estaGuardando: action.datos.estaGuardando,
                        error: action.datos.error
                    }
                default:
                    return state;
            }
        default:
            return state;
    }
}