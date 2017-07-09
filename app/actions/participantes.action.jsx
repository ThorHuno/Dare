import {types} from 'Constantes'

export var AgregarParticipante = (participante) => {
    return {type: types.AGREGAR_PARTICIPANTE, participante}
}

export var EliminarParticipante = (indice) => {
    return {type: types.ELIMINAR_PARTICIPANTE, indice}
}