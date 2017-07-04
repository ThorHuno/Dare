import React from 'react'

class Participante extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <li>{this.props.nombre}</li>
        );
    }
}

export default Participante;