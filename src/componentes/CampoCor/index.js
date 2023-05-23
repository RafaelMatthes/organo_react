import './CampoCor.css'

const CampoTexto = (props) => {

    // let valor = 'Rafael Matthes'

    const aoDigitado = (event) => {
        props.setValor(event.target.value)
    }

    return (
        <div className="campo-texto">
            <label>{props.label}</label>
            <input
                type='color'
                value={props.valor}
                onChange={aoDigitado}
                required={props.obrigatorio}
                placeholder={props.placeholder}
            />
        </div>
    )
}

export default CampoTexto;