import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import { withStyles } from '@material-ui/core/styles';

import AppNav from './components/AppNav';
import Albums from './containers/Albums';
import Album from './containers/Album';

class App extends Component {
  render() {
    return (
      <div className="App">
          <AppNav />
          <Album/>
          <Albums />
      </div>
    );
  }
}
//withStyles convierte estilos en clases
export default withStyles({
    button:{
      backgroundColor: 'red'
    },
    sombra:{
      boxShadow: '0px 0px 5px rgba(0,0,0,0.5)'
    }
})(App);
