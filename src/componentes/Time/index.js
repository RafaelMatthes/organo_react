import './Time.css'
import Colaborador from '../Colaborador'
import hexToRgba from 'hex-to-rgba';

const Time = (props) => {
    const cssPrimaria = { backgroundImage: 'url(/imagens/fundo.png)', backgroundColor: hexToRgba(props.cor, '0.6')}
    const cssSecundaria = { borderColor: props.cor }

    return (
        // se o boleano for True, executa a segunda parte
        // isto é syntax do ReactJs
        (props.colaboradores.length > 0) && <section
            className="time"
            style={cssPrimaria}
        >
            <h3 style={cssSecundaria}>{props.nome}</h3>
            <input
                value={props.cor}
                type="color"
                className="input-cor"
                onChange={(evento) => {
                    props.mudaCor(
                        evento.target.value,
                        props.time.id
                    )
                }}
            />
            <div className='colaboradores'>
                {props.colaboradores.map( colaborador =>
                    {
                    return <Colaborador
                        key={colaborador.nome}
                        nome={colaborador.nome}
                        cargo={colaborador.cargo}
                        imagem={colaborador.imagem}
                        id={colaborador.id}
                        cor={props.cor}
                        aoDeletar={props.aoDeletar}
                    />
                })}
            </div>
        </section>
    )
}

export default Time;