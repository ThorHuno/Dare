import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {BrowserRouter} from 'react-router-dom'
import ContenedorApp from 'ContenedorApp'

var store = require('ConfigureStore').configure();

require('bootstrap/dist/css/bootstrap.min.css')

class App extends React.Component {
    render() {
        return (<ContenedorApp/>);
    }
}

ReactDOM.render(
    <Provider store={store}>
    <BrowserRouter>
        <App/>
    </BrowserRouter>
</Provider>, document.getElementById("root"));