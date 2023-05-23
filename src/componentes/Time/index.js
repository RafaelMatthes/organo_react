import './Time.css'
import Colaborador from '../Colaborador'

const Time = (props) => {
    const cssPrimaria = { backgroundImage: 'url(/imagens/fundo.png)', backgroundColor: props.corPrimaria }
    const cssSecundaria = { borderColor: props.corSecundaria }

    return (
        // se o boleano for True, executa a segunda parte
        // isto é syntax do ReactJs
        (props.colaboradores.length > 0) && <section
            className="time"
            style={cssPrimaria}
        >
            <h3 style={cssSecundaria}>{props.nome}</h3>
            <input
                value={props.corPrimaria}
                type="color"
                className="input-cor"
                onClick={() => {}}
            />
            <div className='colaboradores'>
                {props.colaboradores.map( colaborador =>
                    {
                    return <Colaborador
                        key={colaborador.nome}
                        nome={colaborador.nome}
                        cargo={colaborador.cargo}
                        imagem={colaborador.imagem}
                        corSecundaria={props.corSecundaria}
                        aoDeletar={props.aoDeletar}
                    />
                })}
            </div>
        </section>
    )
}

export default Time;