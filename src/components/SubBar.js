import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from '../lib/AuthProvider';

class SubBar extends Component{
    render(){
        return(
            <div>
          <div className="subNav">
            <p><Link to="/desayunos" >Desayunos</Link></p>
            <p><Link to="/burgers" >Burgers</Link></p>
            <p><Link to="/wraps" >Wraps</Link></p> 
            <p><Link to="/bocadillos" >Bocadillos</Link></p> 
            <p><Link to="/tacos" >Tacos</Link></p> 
            <p><Link to="/butifarra" >Butifarra</Link></p>
            <p><Link to="/fritos" >Fritos</Link></p>
            <p><Link to="/bebidas" >Bebidas</Link></p>
            <p><Link to="/dulce" >Dulce</Link></p>      
            <div >
                <button className="button-pedido"><Link to="/pedidos">Hacer Pedido</Link></button>
            </div>
          </div>
        </div>
        )
    };
};

export default withAuth(SubBar);