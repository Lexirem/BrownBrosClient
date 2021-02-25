import React from "react";
import { withAuth } from "../lib/AuthProvider";
import { Link } from "react-router-dom";

function Home(props) {
    return(
      <div>
        
        <div>
          <h1>Bienvenidos a Brown Bros.</h1>
        </div>


      </div>    
    )
}

export default withAuth(Home);
