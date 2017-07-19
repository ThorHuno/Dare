import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {BrowserRouter, Route, Link, Switch} from 'react-router-dom'
import ListadoParticipantes from 'ListadoParticipantes'
import FormularioTorneo from 'FormularioTorneo'

var store = require('ConfigureStore').configure();

require('bootstrap/dist/css/bootstrap.min.css')

class App extends React.Component {
    render() {
        return ( < div className = "container" > <Switch>
            <Route exact path='/' component={FormularioTorneo}/>
            <Route path='/foo' component={ListadoParticipantes}/>
        </Switch>
        </div>);
    }
}

ReactDOM.render(
    <Provider store={store}>
    <BrowserRouter>
        <App/>
    </BrowserRouter>
</Provider>, document.getElementById("root"));