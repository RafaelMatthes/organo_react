import './CampoInput.css'

const CampoInput = ({valor, label, placeholder , obrigatorio = false, setValor, type= 'text'}) => {

    // let valor = 'Rafael Matthes'

    const aoDigitado = (event) => {
       setValor(event.target.value)
    }

    return (
        <div className={`campo campo-${type}`}>
            <label>{label}</label>
            <input
                type={type}
                value={valor}
                onChange={aoDigitado}
                required={obrigatorio}
                placeholder={placeholder}
            />
        </div>
    )
}

export default CampoInput;