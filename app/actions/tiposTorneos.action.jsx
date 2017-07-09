import axios from 'axios';
import {types} from 'Constantes'

export var ObtenerTiposTorneo = (obteniendoTiposTorneo) => {
    return {type: types.OBTENIENDO_TIPOS_TORNEO, obteniendoTiposTorneo}
}

export var TiposTorneoRecibidos = (tiposTorneo) => {
    return {type: types.TIPOS_TORNEO_RECIBIDOS, tiposTorneo}
}

export var ErrorObtenerTiposTorneo = (errorObteniendoTiposTorneo) => {
    return {type: types.ERROR_OBTENIENDO_TIPOS_TORNEO, errorObteniendoTiposTorneo}
}

export var ObtenerTiposTorneoRequest = () => {
    return (dispatch, getState) => {
        dispatch(ObtenerTiposTorneo(true));

        axios
            .get('/api/ObtenerTiposTorneo')
            .then((respuesta) => {
                dispatch(ObtenerTiposTorneo(false));
                dispatch(TiposTorneoRecibidos(respuesta));
            })
            .catch((error) => {
                dispatch(ObtenerTiposTorneo(false));
                dispatch(ErrorObtenerTiposTorneo(error));
            });
    }
}