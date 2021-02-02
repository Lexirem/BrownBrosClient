import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from '../lib/AuthProvider';

class Signup extends Component {
  state = { name: "", surname: "", email: "", password: "", direction: "", postalCode: ""};

  handleFormSubmit = event => {
    event.preventDefault();
    const { name, surname, email, password, direction, postalCode } = this.state;
    console.log(this.state, "This stateeee")
    this.props.signup({ name, surname, email, password, direction, postalCode });
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { name, surname, email, password, direction, postalCode } = this.state;
    return (
      <div className="login">
        <h1>Sign Up</h1>

        <form onSubmit={this.handleFormSubmit}>
          <label><b>Nombre: </b></label>
          <input type="text" name="name" value={name} onChange={this.handleChange} />
          <br/>
          <label><b>Apellidos: </b></label>
          <input type="text" name="surname" value={surname} onChange={this.handleChange} />
          <br/>
          <label><b>Email: </b></label>
          <input type="text" name="email" value={email} onChange={this.handleChange} />
          <br/>
          <label><b>Password: </b></label>
          <input type="password" name="password" value={password} onChange={this.handleChange} />
          <br/>
          <label><b>Direccion: </b></label>
          <input type="text" name="direction" value={direction} onChange={this.handleChange} />
          <br/>
          <label><b>Codigo Postal: </b></label>
          <input type="text" name="postalCode" value={postalCode} onChange={this.handleChange} />
          <br/>
          <input type="submit" value="Signup" />
        </form>
        
        <p>Already have account?</p>
        <Link to={"/login"}> Login</Link>
      </div>
    );
  }
}

export default withAuth(Signup);