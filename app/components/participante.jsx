import React from 'react'
import {connect} from 'react-redux'
import * as ParticipantesAction from 'ParticipantesAction'
require('../styles/app.css')

class Participante extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <li className="list-group-item">
                <div className="clearfix">
                    <div className="flotante-izquierda contenedor-arrastre"></div>
                    <div className="flotante-izquierda contenedor-input">
                        <input
                            type="text"
                            defaultValue=""
                            className="form-control"
                            minLength="5"
                            maxLength="30"/>
                    </div>
                    <div className="flotante-izquierda contenedor-eliminar">
                        <span
                            className="glyphicon glyphicon-remove-circle eliminar"
                            onClick={() => {
                            this
                                .props
                                .dispatch(ParticipantesAction.EliminarParticipante(this.props.indice))
                        }}
                            title="Quitar de las lista de participantes"></span>
                    </div>
                </div>
            </li>
        );
    }
}

export default connect()(Participante);