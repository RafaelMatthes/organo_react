import { useState } from 'react'
import Banner from './componentes/Banner'
// import Banner from './componentes/Banner/Banner'
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';
import Rodape from './componentes/Rodape';
import { v4 as uuidv4 } from 'uuid'


function App() {

  const [times, setTimes] = useState([
    {
      'id': uuidv4(),
      'nome': 'Programação',
      'corPrimaria': '#d9f7e9',
      'corSecundaria': '#57c278',
    },
    {
      'id': uuidv4(),
      'nome': 'Front-end',
      'corPrimaria': '#e8f8ff',
      'corSecundaria': '#82cffa',
    },
    {
      'id': uuidv4(),
      'nome': 'Back-end',
      'corPrimaria': '#f0f8e2',
      'corSecundaria': '#a6d157',
    },
    {
      'id': uuidv4(),
      'nome': 'Data Science',
      'corPrimaria': '#fde7e8',
      'corSecundaria': '#e06b69',
    },
  ])

  const [colaboradores, setColaboradores] = useState([])

  const aoAdicionarNovoColab= (colaborador) => {
    setColaboradores([...colaboradores, colaborador])
  }

  function delColaborador(id) {
    setColaboradores(
      colaboradores.filter( colaborador => colaborador.id !== id)
    )
  }

  function mudarCorTime(cor, id) {
    setTimes( times.map((time) => {
      if(time.id === id) {
        time.corPrimaria = cor
      }
      return time
    }))
  }

  function cadastrarTime(time) {
    setTimes([...times, time])
  }

  return (
    <div className="App">
      <Banner />
      <Formulario
        times={times.map(time => time.nome)}
        aoAdicionar={colaborador => aoAdicionarNovoColab(colaborador)}
        aoAddNovoTime={time => cadastrarTime(time)}
        />
      {times.map(time =>
        <Time
          key={time.nome}
          time={time}
          corPrimaria={time.corPrimaria}
          corSecundaria={time.corSecundaria}
          colaboradores={colaboradores.filter(colaborador => time.nome === colaborador.time)}
          aoDeletar={delColaborador}
          mudaCor={mudarCorTime}
          />
        )
      }
      <Rodape />
    </div>
  );
}

export default App;
