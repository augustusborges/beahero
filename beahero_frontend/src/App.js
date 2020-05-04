import React, {useState} from 'react';
import Cabecalho from './Cabecalho';
import Routes from './routes';
import './global.css';

function App() {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <Cabecalho>Contador: {counter} </Cabecalho>
      <button onClick={increment}>Incrementar</button>


      <div>
        <Routes />
      </div>
  

    </div>
  );

  function increment(){
    setCounter(counter + 1);
  }
}

export default App;
