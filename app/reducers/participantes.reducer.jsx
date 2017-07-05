import {types} from 'Constantes'

export var Participante = (state = [], action) => {
    switch (action.type) {
        case types.AGREGAR_PARTICIPANTE:
            return [
                ...state,
                action.participante
            ]
        default:
            return state
    }
}