import React from 'react'
import {connect} from 'react-redux'
import * as TiposTorneosAction from 'TiposTorneosAction'
import * as CrudTorneoAction from 'CrudTorneoAction'

class FormularioTorneo extends React.Component {
    constructor(props) {
        super(props);
        props.dispatch(TiposTorneosAction.ObtenerTiposTorneoRequest())
    }

    render() {
        let GuardarTorneo = () => {
            let formulario = $('#FrmTorneo').serializeArray();
            let parametros = {};

            formulario.forEach((elemento, indice) => {
                parametros[elemento.name] = elemento.value
            });

            console.log(parametros);

            this
                .props
                .dispatch(CrudTorneoAction.GuardadoTorneoRequest(parametros))
        }

        return (
            <div>
                <form
                    id="FrmTorneo"
                    onSubmit={(e) => {
                    e.preventDefault();
                    GuardarTorneo()
                }}>
                    <div className="form-group">
                        <label htmlFor="TxtNombreTorneo">Nombre:</label>
                        <input
                            type="text"
                            id="TxtNombreTorneo"
                            name="Nombre"
                            className="form-control"
                            tabIndex="0"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="TxtJuego">Juego:</label>
                        <input
                            type="text"
                            id="TxtJuego"
                            name="Juego"
                            className="form-control"
                            tabIndex="1"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="CboTipoTorneo">Tipo de torneo:</label>
                        <select
                            name="TipoTorneo"
                            id="CboTipoTorneo"
                            className="form-control"
                            tabIndex="2">
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
                            <input type="checkbox" id="ChkEsPublico" name="EsPublico" tabIndex="3"/>
                            &nbsp;¿Torneo público?
                        </label>
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Guardar torneo" tabIndex="4"/>
                    </div>
                </form>
            </div>
        );
    }
}

export default connect((state) => {
    return {TiposTorneos: state.TiposTorneos, CrudTorneo: state.CrudTorneo}
})(FormularioTorneo);