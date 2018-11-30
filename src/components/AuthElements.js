import React from 'react';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import ExitToApp from '@material-ui/icons/ExitToApp';

const AuthElements = function(props){
  const logInButton = ()=>{
    if(props.user) return (
      //Para evitar otro div metemos los 2 elementos en un arreglo
      [<Avatar key='auth-avatar-element' src={props.user.providerData[0].photoURL}/>,
        (<IconButton key='auth-sign-out-button-element' color="inherit" onClick={props.logout}><ExitToApp/></IconButton>)]
    );

    return (<Button variant="contained" onClick={props.login}>
      Iniciar sesion
    </Button>);

  }

  return(
    <div className = {props.classes.container}>
      {/* className = {this.props.classes.container} */}
      {logInButton()}
    </div>
  );
}

export default withStyles({
  container:{
    display: 'flex',
    flexDirection: 'row'
  }
})(AuthElements);
