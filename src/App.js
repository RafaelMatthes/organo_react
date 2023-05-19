import { useState } from 'react'
import Banner from './componentes/Banner'
// import Banner from './componentes/Banner/Banner'
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';
import Rodape from './componentes/Rodape';


function App() {

  const times = [
    {
      'nome': 'Programação',
      'corPrimaria': '#d9f7e9',
      'corSecundaria': '#57c278',
    },
    {
      'nome': 'Front-end',
      'corPrimaria': '#e8f8ff',
      'corSecundaria': '#82cffa',
    },
    {
      'nome': 'Back-end',
      'corPrimaria': '#f0f8e2',
      'corSecundaria': '#a6d157',
    },
    {
      'nome': 'Data Science',
      'corPrimaria': '#fde7e8',
      'corSecundaria': '#e06b69',
    },
  ]

  const [colaboradores, setColaboradores] = useState([])

  const aoAdicionarNovoColab= (colaborador) => {
    console.log(colaboradores)
    setColaboradores([...colaboradores, colaborador])
  }

  return (
    <div className="App">
      <Banner />
      <Formulario
        times={times.map(time => time.nome)}
        aoAdicionar={
          colaborador => aoAdicionarNovoColab(colaborador)
        }/>
      {times.map(time =>
        <Time
          key={time.nome}
          nome={time.nome}
          corPrimaria={time.corPrimaria}
          corSecundaria={time.corSecundaria}
          colaboradores={colaboradores.filter(colaborador => time.nome === colaborador.time)}
          />
        )
      }
      <Rodape />
    </div>
  );
}

export default App;
