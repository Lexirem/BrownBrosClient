import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withAuth } from '../lib/AuthProvider';
import service from '../lib/auth-service';


class Profile extends Component {
    state = {
      userId: this.props.user._id,
      user: {},
    };
  
    getProfile = async () => {
      try{
        const res = await service.profile(this.props.match.params.id);
        console.log(this.props.match, "res")
        this.setState({ user: res})
      } catch (error) {
        console.log(error);
      }
    };
    componentDidMount(){
        this.getProfile();
    }
  
    render() {
      return (
        <div className="profile">
          <h2>Welcome {this.state.user.name} {this.state.user.surname}</h2>
          <div className="profile-link">
          <Link to={`/profile/${this.props.match.params.id}/edit`} >Edit your Profile</Link>
          </div>
        </div>
      )
    }
  }
  
  export default withAuth(Profile);