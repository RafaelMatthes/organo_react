import { useState } from 'react'
import Banner from './componentes/Banner'
import Formulario from './componentes/Formulario';
// import Banner from './componentes/Banner/Banner'

function App() {

  const times = [
    '--',
    'Programação',
    'Front-end',
    'Back-end',
    'Data Science',
    'DevOps'
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
        times={times}
        aoAdicionar={
          colaborador => aoAdicionarNovoColab(colaborador)
        }/>
    </div>
  );
}

export default App;
