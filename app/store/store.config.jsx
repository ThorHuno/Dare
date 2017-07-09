import {createStore, compose, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {Participante} from 'ParticipantesReducer'
import {TiposTorneos} from 'TiposTorneosReducer'

export var configure = () => {
    var reducers = combineReducers({Participante, TiposTorneos});

    var store = createStore(reducers, compose(applyMiddleware(thunk), window.devToolsExtension
        ? window.devToolsExtension()
        : f => f));

    return store;
}