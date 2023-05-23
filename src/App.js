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
      'cor': '#d9f7e9',
    },
    {
      'id': uuidv4(),
      'nome': 'Front-end',
      'cor': '#e8f8ff',
    },
    {
      'id': uuidv4(),
      'nome': 'Back-end',
      'cor': '#f0f8e2',
      'cor': '#a6d157',
    },
    {
      'id': uuidv4(),
      'nome': 'Data Science',
      'cor': '#fde7e8',
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
        time.cor = cor
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
          cor={time.cor}
          cor={time.cor}
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
