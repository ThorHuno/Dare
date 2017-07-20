import React from 'react'
import ListadoParticipantes from 'ListadoParticipantes'
import FormularioTorneo from 'FormularioTorneo'
import {Route, Switch} from 'react-router-dom'

class ContenedorApp extends React.Component {
    render() {
        return (
            <div className="container">
                <Switch>
                    <Route exact path='/' component={FormularioTorneo}/>
                    <Route path='/foo' component={ListadoParticipantes}/>
                </Switch>
            </div>
        )
    }
}

export default ContenedorApp;