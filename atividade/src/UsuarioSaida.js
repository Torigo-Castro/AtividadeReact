import UsuarioEntrada from './UsuarioEntrada'

const { Component } = require("react");

const UsuarioSaida = (props) => {
    return (
      <div>
        <h4>{props.name}</h4>
        <h4>Aqui existe um texto qualquer....</h4>
      </div> 
    );
  }

export default UsuarioSaida;