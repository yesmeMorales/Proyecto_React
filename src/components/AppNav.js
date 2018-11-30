import React,  { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

import Login from '../containers/Login';

class AppNav extends Component{
  render(){
    return(
      <div>
        <AppBar position='static'>
            <Toolbar className={this.props.classes.nav}>
              {/* <p className={this.props.classes.grow}>Albums</p> */}
              <Typography color="inherit" variant="h6" className={this.props.classes.grow} component="h1">
                  Albums
              </Typography>
              <Login/>
            </Toolbar>
        </AppBar>
      </div>
    );
  }

}

export default withStyles({
  //Quien tenga esta clase crecera y abarcará todo lo posible
  grow:{flexGrow:1, textAlign:'left'},
  nav:{
    color: 'white'
  }
})(AppNav);
