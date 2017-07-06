import React from 'react'

class Participante extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <li className="list-group-item">{this.props.nombre}</li>
        );
    }
}

export default Participante;