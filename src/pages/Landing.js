import React from "react";
import { withAuth } from "../lib/AuthProvider";
import { Link } from "react-router-dom";

function Home(props) {
    return(
        <div>
         <div className="subNav">
            <ul>
              <li>Desayunos</li>
              <li>Burgers</li>
              <li>Wraps</li> 
              <li>Bocadillos</li> 
              <li>Tacos</li> 
              <li>Butifarra</li>
              <li>Fritos</li>
              <li>Bebidas</li>
              <li>Dulce</li>   
            </ul>   
         </div> 

        </div>    
    )
}

export default withAuth(Home);
