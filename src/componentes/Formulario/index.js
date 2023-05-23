
import './Formulario.css'
import { useState } from 'react'
import CampoTexto from '../CampoTexto'
import CampoCor from '../CampoCor'
import ListaSuspensa from '../ListaSuspensa'
import Botao from '../Botao'
import { v4 as uuidv4 } from 'uuid'


const Formulario = (props) => {

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState(props.times[0])
    const [nomeTime, setNomeTime] = useState('')
    const [corTime, setCorTime] = useState('')
    // useState é um método do Reactjs que controla o "estado" da variavel
    // ele retornará uma variável e um método set

    const cleanForm = () => {
        setNome('')
        setCargo('')
        setImagem('')
        setTime(time)
    }
    const onSaveColab= (evento) => {
        evento.preventDefault()
        let id = uuidv4()
        props.aoAdicionar({
            nome,
            cargo,
            imagem,
            time,
            id
        })
        cleanForm()
    }

    const onSaveTime= (evento) => {
        evento.preventDefault()
        props.aoAddNovoTime({
            'nome': nomeTime,
            'corSecundaria': corTime,
            'corPrimaria': corTime
        })
        cleanForm()
    }

    return (
        <section className="formulario">
            <form onSubmit={onSaveColab}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto
                    valor={nome}
                    setValor={setNome}
                    obrigatorio={true}
                    label="Nome"
                    placeholder="Informe seu Nome"
                />
                <CampoTexto
                    valor={cargo}
                    setValor={setCargo}
                    obrigatorio={true}
                    label="Cargo" placeholder="Informe seu Cargo"
                />
                <CampoTexto
                    valor={imagem}
                    setValor={setImagem}
                    label="Github ID"
                    placeholder="Informe o ID do Github"
                />
                <ListaSuspensa
                    valor={time}
                    setValor={valor => setTime(valor)}
                    label="Time"
                    itens={props.times}
                />
                <Botao>Criar Card</Botao>
            </form>
            <form onSubmit={onSaveTime}>
                <h2>Preencha os dados para criar o um novo Time</h2>
                <CampoTexto
                    valor={nomeTime}
                    setValor={setNomeTime}
                    obrigatorio
                    label="Nome"
                    placeholder="Informe o Nome do Time"
                />
                <CampoCor
                    valor={corTime}
                    setValor={setCorTime}
                    label="Cor" placeholder="Digite a cor do time"
                />
                <Botao>Add Time</Botao>
            </form>
        </section>

    )
}

export default Formulario