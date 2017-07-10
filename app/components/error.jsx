import React from 'react'

class Error extends React.Component {
    render() {
        return (
            <li>{this.props.mensaje}</li>
        );
    }
}

export default Error;