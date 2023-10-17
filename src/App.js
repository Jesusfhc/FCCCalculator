import './App.css';
import freeCodeCampLogo from './images/WhiteLogo.png'
import Button from './components/Button';
import Screen from './components/Screen';
import ClearButton from './components/ClearButton';
import { useState } from 'react';
import {evaluate} from 'mathjs';

function App() {

  const [input, setInput] = useState('');
  
  const agregarInput = (val) => {
    setInput(input + val)
  };

  const calcularResultado = () => {
    if (input) {
      setInput(evaluate(input))
    } else {
      alert('Mugiwara No has colocado nada para calcular')
    }
    
  };

  return (

    <div className="App">
      <div className='logo-container'>
        <img 
          src={freeCodeCampLogo}
          className='calc-logo'
          alt='Logo de Calculadora'/>
      </div>

      <div className='calc-container'>
        
        <Screen input={input}/>

        <div className='fila'>
          <Button manejarClick={agregarInput}>1</Button>
          <Button manejarClick={agregarInput}>2</Button>
          <Button manejarClick={agregarInput}>3</Button>
          <Button manejarClick={agregarInput}>+</Button>
        </div>
        <div className='fila'>
          <Button manejarClick={agregarInput}>4</Button>
          <Button manejarClick={agregarInput}>5</Button>
          <Button manejarClick={agregarInput}>6</Button>
          <Button manejarClick={agregarInput}>-</Button>
        </div>
        <div className='fila'>
          <Button manejarClick={agregarInput}>7</Button>
          <Button manejarClick={agregarInput}>8</Button>
          <Button manejarClick={agregarInput}>9</Button>
          <Button manejarClick={agregarInput}>*</Button>
        </div>
        <div className='fila'>
          <Button manejarClick={calcularResultado}>=</Button>
          <Button manejarClick={agregarInput}>0</Button>
          <Button manejarClick={agregarInput}>.</Button>
          <Button manejarClick={agregarInput}>/</Button>
        </div>
        
        <div className='fila'>
          <ClearButton manejarClear={()=> setInput('')}/>
        </div>
        
      </div>

    </div>
  );
}

export default App;
