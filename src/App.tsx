import React from 'react';
import logo from './logo.svg';
import './App.css';
import {pickNumber, returnRedunt, sum, sumar} from './utils';

function App() {
  console.log('Test')
  const variableA = 'hola'
  const variableSobreEscrita = 'es un string'
  variableSobreEscrita = 9 + 9
let valor1 = 1
  let valor2 = '2'
  let valor3 = 3
  sum(valor1, valor2)
  sumar(valor1, valor3)
  returnRedunt()
  pickNumber()
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
