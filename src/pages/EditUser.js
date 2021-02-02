import React, { Component } from "react";
import axios from "axios";
import { withAuth } from "../lib/AuthProvider";


class EditUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.user.name,
      surname: this.props.user.surname,
      email: this.props.user.email,
      direction: this.props.user.direction,
      postalCode: this.props.user.postalCode,
      card: this.props.user.card
    };
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    let { name, surname, email, direction, postalCode, card } = this.state;

    axios
      .put(
        `${process.env.REACT_APP_API_URI}/profile/${this.props.match.params.id}/edit`,
        {
          name,
          surname,
          email,
          direction,
          postalCode,
          card
        }
      )
      .then(() => {
        this.props.history.push(`/profile/${this.props.match.params.id}`);
      })
      .catch((err) => console.log(err));
  };

  handleChangeUser = (event) => {
    let { name, value } = event.target;
    this.setState({ [name]: value });
  };

  

  render(){
      return(
          <div className="edit">
              <h2>Edit your Profile</h2>
              <form className="edit-info" onSubmit={this.handleFormSubmit}>
                  <label><b>Name: </b></label>
                  <input
                    type="text"
                    name="name"
                    value={this.state.name}
                    onChange={(e) => this.handleChangeUser(e)}
                  />
                  <br/>
                  <label><b>Surname: </b></label>
                  <input
                    type="text"
                    name="surname"
                    value={this.state.surname}
                    onChange={(e) => this.handleChangeUser(e)}
                  />
                  <label><b>Email: </b></label>
                  <input
                    type="text"
                    name="email"
                    value={this.state.email}
                    onChange={(e) => this.handleChangeUser(e)}
                  />
                  <br/>
                  <label><b>Direction: </b></label>
                  <input
                    type="text"
                    name="direction"
                    value={this.state.direction}
                    onChange={(e) => this.handleChangeUser(e)}
                  />
                  <br/>
                  <label><b>Postal Code: </b></label>
                  <input
                    type="text"
                    name="postalCode"
                    value={this.state.postalCode}
                    onChange={(e) => this.handleChangeUser(e)}
                  />
                  
                  <input type="submit" value="Submit"/>
              </form>
          </div>
      )
  }
}

export default withAuth(EditUser);