import UsuarioSaida from "./UsuarioSaida";
import {  useState } from "react";

const { Component } = require("react");


function UsuarioEntrada(){

        const[texto,settexto] = useState("");

        function mudatexto(frase){
            settexto(frase)
        }

        return (
          <div>
            <input type="text" name="nome" onChange={e=>{mudatexto(e.target.value)}}></input>
            <UsuarioSaida name={texto} />
          </div>
        );
}


export default UsuarioEntrada;