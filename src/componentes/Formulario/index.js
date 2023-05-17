
import './Formulario.css'
import { useState } from 'react'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import Botao from '../Botao'


const Formulario = (props) => {

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')
    // useState é um método do Reactjs que controla o "estado" da variavel
    // ele retornará uma variável e um método set

    const cleanForm = () => {
        setNome('')
        setCargo('')
        setImagem('')
        setTime('--')
    }
    const onSave= (evento) => {
        evento.preventDefault()
        console.log('foi enviado')
        props.aoAdicionar({
            nome,
            cargo,
            imagem,
            time
        })
        cleanForm()
    }

    return (
        <section className="formulario">
            <form onSubmit={onSave}>
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
                    label="Imagem"
                    placeholder="Informe o endereço da Imagem"
                />
                <ListaSuspensa
                    valor={time}
                    setValor={setTime}
                    label="Time"
                    itens={props.times}
                />
                <Botao>Criar Card</Botao>
            </form>
        </section>
    )
}

export default Formulario