import './Colaborador.css'
import { AiFillCloseCircle } from 'react-icons/ai'

const Colaborador = ({ imagem, nome, cargo, corSecundaria, aoDeletar}) => {
    return (
        <div className="colaborador">
            <AiFillCloseCircle size={25} className="deletar" onClick={() => aoDeletar(nome)} />
            <div className="cabecalho" style={{backgroundColor: corSecundaria}}>
                <img src={'https://github.com/'+ imagem + '.png'} alt={nome} />
            </div>
            <div className='rodape'>
                <h4>{nome}</h4>
                <h5>{cargo}</h5>
            </div>
        </div>
    )
}

export default Colaborador;