import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import { render } from '@testing-library/react';
import { renderIntoDocument } from 'react-dom/test-utils';
import UsuarioEntrada from './UsuarioEntrada';

function App() {
  return (
   <div> 
     <h3>Atividade React</h3>
     <UsuarioEntrada />
    </div>
  );
}

export default App;
