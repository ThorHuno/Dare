import React from 'react'
import Error from 'Error'

class ErroresSummary extends React.Component {
    render() {
        return (
            <ul>
                {this
                    .props
                    .errores
                    .map((elemento, indice) => {
                        return <Error key={indice} mensaje={elemento.message}/>
                    })
}
            </ul>
        );
    }
}

export default ErroresSummary;