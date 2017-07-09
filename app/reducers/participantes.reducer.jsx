import {types} from 'Constantes'

export var Participante = (state = [], action) => {
    switch (action.type) {
        case types.AGREGAR_PARTICIPANTE:
            return [
                ...state,
                action.participante
            ]
        case types.ELIMINAR_PARTICIPANTE:
            return [
                ...state.slice(0, action.indice),
                ...state.slice(action.indice + 1)
            ]
        default:
            return state
    }
}