import React from 'react'
import Participante from 'Participante'
import {connect} from 'react-redux'
import * as ParticipantesAction from 'ParticipantesAction'

class ListadoParticipantes extends React.Component {
    constructor(props)
    {
        super(props);

        props.dispatch(ParticipantesAction.AgregarParticipante({nombre: 'equipo1'}));
        props.dispatch(ParticipantesAction.AgregarParticipante({nombre: 'equipo1'}));
    }

    render() {
        var {dispatch, participantes} = this.props;

        return (
            <ul className="list-group">
                {participantes.map((elemento, indice) => {
                    return <Participante nombre={elemento.nombre} key={indice}/>
                })
}
            </ul>
        );
    }
}

export default connect((state) => {
    return {participantes: state.Participante}
})(ListadoParticipantes);