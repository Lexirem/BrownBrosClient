import React, { Component } from 'react';
import axios from "axios";

class Pedido extends Component {
    render() {
        return (
            <div>
                <div className="carta-pedido">
                  <img className="logos" src="logo burgers.png" alt="logo burgers"/> 
                  <hr></hr>
                </div>
                <div>
                  <img className="logos" src="logo wraps.png" alt="logo wraps"/> 
                  <hr></hr>
                </div>
                <div>
                  <img className="logos" src="logo butifarras.png" alt="logo butifarras"/> 
                  <hr></hr>
                </div>
                <div>
                  <img className="logos" src="logo bocatas.png" alt="logo bocatas"/> 
                  <hr></hr>
                </div>
                <div>
                  <img className="logos" src="logo tacos.png" alt="logo tacos"/> 
                  <hr></hr>
                </div>
                <div>
                  <img className="logos" src="logo fritos.png" alt="logo fritos"/> 
                  <hr></hr>
                </div>
                <div>
                  <img className="logos" src="logo salsas caseras.png" alt="logo caseras"/> 
                  <hr></hr>
                </div>
                <div>
                  <img className="logos" src="logo dulces.png" alt="logo dulces"/> 
                  <hr></hr>
                </div>
                <div>
                  <img className="logos" src="logo bebidas.png" alt="logo bebidas"/> 
                  <hr></hr>
                </div>
                <button>Confirmar Pedido</button>
            </div>
        )
    }
}

export default Pedido;