import React, { Component } from 'react';
import autoBind from 'react-autobind';
import './App.css';

import firebase from './firebase.js';

import { Link, Route, Switch, withRouter, Redirect } from 'react-router-dom';

class AuthBody extends Component {

  constructor() {
    super();
    autoBind(this);
  }

  state = {
    email: '',
    password: '',
    authorized: false
  }

  HandleEmail(e) {
    this.setState({email: e.target.value});
  }

  HandlePassword(e) {
    this.setState({password: e.target.value});
  }

  SignIn(e) {
    var email = this.state.email;
    var password = this.state.password;
    firebase.auth().signInWithEmailAndPassword(email, password).then(function(result){
      console.log(result);
      this.setState({authorized: true});
    }.bind(this)).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorMessage);
    });
  }

  render() {
    if(this.state.authorized == true){
      return(<Redirect to="/"/>);
    }
    return (
      <div>
        <label>email:</label>
        <input type="email" value={this.state.email} onChange={this.HandleEmail}/>
        <label>password:</label>
        <input type="password" value={this.state.password} onChange={this.HandlePassword}/>
        <button onClick={this.SignIn}>Log In</button>
      </div>
    );
  }
}

class EditBody extends Component {

  state = {
    authorized: 'pending'
  }

  constructor(){
    super();
    autoBind(this);
    firebase.auth().onAuthStateChanged(function(user) {
      if(user == null){
        this.setState({authorized: false});
      }
      else {
        console.log(user.uid);
        firebase.database().ref('/AdminUids').child(user.uid).once('value', function(snapshot){
          var admin = (snapshot.val() !== null);
          if (admin) {
            console.log('good to go:');
            console.log(user);
            this.setState({authorized: true});
          } else {
            this.setState({authorized: false});
          }
        }.bind(this));
      }
    }.bind(this));
  }

  render() {
    if(this.state.authorized == false){
      return(<Redirect to="/auth"/>);
    }
    if(this.state.authorized == 'pending'){
      return(<div></div>);
    }
    return (
      <div>editclass</div>
    );
  }
}

class App extends Component {

  render() {
    return (
      <div id="appbody">
        <Route exact path="/" component={EditBody}/>
        <Route path="/auth" component={AuthBody}/>
      </div>
    );
  }
}

export default App;
