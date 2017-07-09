import axios from 'axios';
import {types} from 'Constantes'

export var GuardadoTorneo = (datos) => {
    return {type: types.GUARDAR_TORNEO, datos}
}

export var GuardadoTorneoRequest = (parametros) => {
    return (dispatch, getState) => {
        dispatch(GuardadoTorneo({estatus: 'request', parametros, estaGuardando: true}));

        axios
            .post('/api/GuardarTorneo', parametros)
            .then((respuesta) => {
                dispatch(GuardadoTorneo({estatus: 'exito', guardado: true, estaGuardando: false}));
            })
            .catch((error) => {
                dispatch(GuardadoTorneo({estatus: 'error', guardado: false, estaGuardando: false, error}));
            });
    }
}