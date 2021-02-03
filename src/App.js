import React, { Component } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";

import AuthProvider from './lib/AuthProvider';
import AnonRoute from './components/AnonRoute';
import PrivateRoute from './components/PrivateRoute';

import Navbar from "./components/Navbar";
import Home from "./pages/Landing";
import Login from "./pages/Login";
import SignUp from "./pages/Signup";
import Profile from "./pages/Profile";
import EditUser from "./pages/EditUser";
import Pedido from "./pages/Pedido";
import Footer from "./components/Footer";

class App extends Component {
  render(){
    return (
      <Router>
      <AuthProvider>
      <div className="App">
        <Navbar/>
        <Switch> 
          <AnonRoute path="/login" component={Login}/>
          <AnonRoute path="/signup" component={SignUp}/>
          <Route exact path="/" component={Home}/>
          <PrivateRoute exact path='/profile/:id' component={Profile}/>
          <PrivateRoute exact path='/profile/:id/edit' component={EditUser}/>
          <PrivateRoute exact path="/pedidos" component={Pedido}/>
        </Switch>
        <Footer/>
      </div>
      </AuthProvider>
      </Router>
    );
  }
 
}

export default App;
