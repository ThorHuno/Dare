import React from 'react'
import ReactDOM from 'react-dom'
import ListadoParticipantes from 'ListadoParticipantes'

class App extends React.Component {
    render() {
        return ( < div > <h1>Hola mundo</h1> < ListadoParticipantes participantes = {
            ['equipo1', 'equipo2']
        } /> </div>);
    }
}

ReactDOM.render(
    <App/>, document.getElementById("root"));