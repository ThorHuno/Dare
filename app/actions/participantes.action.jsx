import {types} from 'Constantes'

export var AgregarParticipante = (participante) => {
    return {type: types.AGREGAR_PARTICIPANTE, participante}
}