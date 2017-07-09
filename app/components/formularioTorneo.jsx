import React from 'react'
import {connect} from 'react-redux'
import * as TiposTorneosAction from 'TiposTorneosAction'

class FormularioTorneo extends React.Component {
    constructor(props) {
        super(props);
        props.dispatch(TiposTorneosAction.ObtenerTiposTorneoRequest())
    }

    render() {
        return (
            <div>
                <form
                    id="FrmTorneo"
                    onSubmit={(e) => {
                    let formulario = $('#FrmTorneo').serialize();
                    console.log(formulario);
                    e.preventDefault()
                }}>
                    <div className="form-group">
                        <label htmlFor="TxtNombreTorneo">Nombre:</label>
                        <input type="text" id="TxtNombreTorneo" name="Nombre" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="TxtJuego">Juego:</label>
                        <input type="text" id="TxtJuego" name="Juego" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="CboTipoTorneo">Tipo de torneo:</label>
                        <select name="TipoTorneo" id="CboTipoTorneo" className="form-control">
                            {this
                                .props
                                .TiposTorneos
                                .tiposTorneo
                                .map((elemento) => {
                                    return <option key={elemento.Id} value={elemento.Id} label={elemento.Valor}></option>
                                })}
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="TxtJuego">
                            <input type="checkbox" id="ChkEsPublico" name="EsPublico" className="checkbox"/>
                        </label>
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Guardar torneo"/>
                    </div>
                </form>
            </div>
        );
    }
}

export default connect((state) => {
    return {TiposTorneos: state.TiposTorneos}
})(FormularioTorneo);