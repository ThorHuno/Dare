import React from 'react'
import Participante from 'Participante'
import {connect} from 'react-redux'
import * as ParticipantesAction from 'ParticipantesAction'

class ListadoParticipantes extends React.Component {
    constructor(props)
    {
        super(props);

        props.dispatch(ParticipantesAction.AgregarParticipante({nombre: ''}));
        props.dispatch(ParticipantesAction.AgregarParticipante({nombre: ''}));

        setTimeout(() => {
            props.dispatch(ParticipantesAction.AgregarParticipante({nombre: ''}));
        }, 2000);
    }

    render() {
        var {dispatch, participantes} = this.props;

        return (
            <div className="row">
                <div className="col-lg-3">
                    <button
                        className="btn btn-default"
                        onClick={() => {
                        this
                            .props
                            .dispatch(ParticipantesAction.AgregarParticipante({nombre: ''}));
                    }}>Agregar participante</button>
                    <ul className="list-group">
                        {participantes.map((elemento, indice) => {
                            return <Participante key={indice} indice={indice}/>
                        })
}
                    </ul>
                </div>
            </div>
        );
    }
}

export default connect((state) => {
    return {participantes: state.Participante}
})(ListadoParticipantes);