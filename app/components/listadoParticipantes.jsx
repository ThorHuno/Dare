import React from 'react'
import Participante from 'Participante'

class ListadoParticipantes extends React.Component {
    render() {
        return (
            <ul>
                {this
                    .props
                    .participantes
                    .map((elemento, indice) => {
                        return <Participante nombre={elemento} key={indice}/>
                    })
}
            </ul>
        );
    }
}

export default ListadoParticipantes;