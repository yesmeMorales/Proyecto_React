import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux';

import firebase from './initializers/firebase';

import store from './initializers/store';
import {setUser,clearUser} from './initializers/actions';
//se va a ejecutar cada vez que el estado de la autenticación cambie
firebase.auth().onAuthStateChanged((user)=>{
  if(user){
    //Alguien inicio de sesion
    store.dispatch(setUser(user));
    // this.setState({
    //   userLoggedIn: true,
    //   photoURL: user.providerData[0].photoURL
    // })
  } else{
    //No han iniciado sesion
    store.dispatch(clearUser());
    // this.setState({
    //   userLoggedIn: false,
    //   photoURL: ' '
    //})
  }
})

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
