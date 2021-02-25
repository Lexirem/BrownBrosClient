import React from "react";
import auth from "./auth-service";	
const { Consumer, Provider } = React.createContext();

// HOC para crear Consumer
const withAuth = (WrappedComponent) => {
  return class extends React.Component {
    render() {    
      return (
        <Consumer>
        { 
          ({login, signup, user, logout, isLoggedin, cart, userCart}) => {
            return (
              <WrappedComponent 
                login={login} 
                signup={signup} 
                user={user}
                logout={logout}
                cart={cart}
                userCart={userCart}
                isLoggedin={isLoggedin}
                {...this.props} />
            );
          }}
        </Consumer>
      );
    }
  };  
};

// Provider
class AuthProvider extends React.Component {
  state = { isLoggedin: false, user: null, isLoading: true, cart: [] };

  componentDidMount() {
    auth.me()
    .then((user) => this.setState({ isLoggedin: true, user: user, isLoading: false }))
    .catch((err) => this.setState({ isLoggedin: false, user: null, isLoading: false }));
  }

  signup = (user) => {
    const { name, surname, direction, postalCode, email, password } = user;
    
    auth.signup({ name, surname, direction, postalCode, email, password })
      .then((user) => this.setState({ isLoggedin: true, user: user }))
      .catch(({response}) => this.setState({ message: response.data.statusMessage}));
  };

  login = (user) => {
    const { email, password } = user;

    auth.login({ email, password })
      .then((user) => this.setState({ isLoggedin: true, user: user }))
      .catch((err) => console.log(err));
  };
	
  logout = () => {
    auth.logout()
      .then(() => this.setState({ isLoggedin: false, user: null }))
      .catch((err) => console.log(err));
  };

	userCart = async () => {
    try {
      const userCart = await auth.cart();
      this.setState({ cart: userCart.products });
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    const { isLoading, isLoggedin, user, cart } = this.state;
    const { login, logout, signup, userCart } = this;
    
    return (
      isLoading ? 
      <div>Loading</div> 
      :
      (<Provider value={{ isLoggedin, user, cart, login, logout, signup, userCart}} >
         {this.props.children}
      </Provider>)
    )	
  }
}

export { Consumer, withAuth };		

export default AuthProvider;