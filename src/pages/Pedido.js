import React, { Component } from 'react';
import axios from "axios";
class Pedido extends Component {
    render() {
        return (
            <div>
                <div>
                  <img className="logos" src="logo burgers.png" alt="logo burgers"/> 
                  <>------------------------------------</>
                </div>
                <div>
                  <img className="logos" src="logo wraps.png" alt="logo wraps"/> 
                  <>------------------------------------</>
                </div>
                <div>
                  <img className="logos" src="logo butifarras.png" alt="logo butifarras"/> 
                  <>------------------------------------</>
                </div>
                <div>
                  <img className="logos" src="logo bocatas.png" alt="logo bocatas"/> 
                  <>------------------------------------</>
                </div>
                <div>
                  <img className="logos" src="logo tacos.png" alt="logo tacos"/> 
                  <>------------------------------------</>
                </div>
                <div>
                  <img className="logos" src="logo fritos.png" alt="logo fritos"/> 
                  <>------------------------------------</>
                </div>
                <div>
                  <img className="logos" src="logo salsas caseras.png" alt="logo caseras"/> 
                  <>------------------------------------</>
                </div>
                <div>
                  <img className="logos" src="logo dulces.png" alt="logo dulces"/> 
                  <>------------------------------------</>
                </div>
                <div>
                  <img className="logos" src="logo bebidas.png" alt="logo bebidas"/> 
                  <>------------------------------------</>
                </div>
                <button>Confirmar Pedido</button>
            </div>
        )
    }
}

export default Pedido;