import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import ListadoParticipantes from 'ListadoParticipantes'

var store = require('ConfigureStore').configure();

require('bootstrap/dist/css/bootstrap.min.css')

class App extends React.Component {
    render() {
        return ( < div > < ListadoParticipantes /> </div>);
    }
}

ReactDOM.render(
    <Provider store={store}>
    <App/>
</Provider>, document.getElementById("root"));