import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from '../lib/AuthProvider';

class Navbar extends Component {
    render(){
        const { user, logout, isLoggedin } = this.props;
        return(
            <nav className='navbar'>
            <div>
              <Link to={"/"} className='home-btn'>
                <img src="BROWN BROS. sello (1).png" alt="logo" className="logo"/>
              </Link>
            </div>
            
              {isLoggedin ? (
                <div className="navbar-logged">
              
                <button className="navbar-button">
                  <Link to={`/profile/${user._id}`}>
                  Profile
                  </Link>
                  </button>
                  <button className="navbar-button" onClick={logout}>
                  Logout
                  </button>
                  <button className="navbar-button">
                    <img src="" alt="carrito"/>
                  </button>
                </div>
              ) : (
                <div className="navbar-logged">
                  <Link to="/login">
                    <button className="navbar-button">Login</button>
                  </Link>
                  <Link to="/signup">
                    <button className="navbar-button">SignUp</button>
                  </Link>
                </div>
              )}
            </nav>
        )
    }
}
export default withAuth(Navbar);