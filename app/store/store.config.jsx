import {createStore, compose, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {Participante} from 'ParticipantesReducer'

export var configure = () => {
    var reducers = combineReducers({Participante});

    var store = createStore(reducers, compose(applyMiddleware(thunk), window.devToolsExtension
        ? window.devToolsExtension()
        : f => f));

    return store;
}