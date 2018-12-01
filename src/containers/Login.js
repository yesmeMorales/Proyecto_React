import React,  { Component } from 'react';
import firebase from '../initializers/firebase';
import {connect} from 'react-redux';
import {saveToken, clearToken, clearAlbums, clearAlbum,  clearPhotos} from '../initializers/actions';

import AuthElements from '../components/AuthElements';


class Login extends Component{
  constructor(props){
    super(props);
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
  }
  //componentDidMount Metodo del ciclo de vida de react. componentDidMount se va a ejecutar una vez que el componente se inserte en la pagina web
  componentDidMount(){
    console.log(this.props.token);
  }

  login(){
    //El proveedor es una nueva instancia de la clase googleAuthProvider
    //El proveedor es distinto si inicias con facebook
    let provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope(' ');
    //podemos iniciar sesion tambien con un redireccionamiento en lugar de popup
    //Se puede usar en aplicaciones hibridas que se hacen  con ionic(ios y android)
    firebase.auth().signInWithPopup(provider).then(result=>{
      let token = result.credential.accessToken;
    //Aqui modificamos el estado(ejecutamos saveToken con el token que recibimos)
      this.props.saveToken(token);
    }).catch(err=>{
      console.log(err);
    })
  }
  logout(){
    firebase.auth().signOut().then(()=>{
        this.props.clearToken();
        this.props.clearAlbums();
        this.props.clearAlbum();
        this.props.clearPhotos();
    });
  }

  render(){
    return(
      <AuthElements
        login={this.login}
        logout={this.logout}
        token={this.props.token}
        user={this.props.user}
      />
    );
  }
}

const mapStateToProps = (state)=>{
    return {
      token: state.token,
      user: state.user
    }
}


//Encaja acciones que se puedan ejecutar para modificar el estado
const mapDispatchToProps = {
  saveToken,
  clearToken,
  clearAlbums,
  clearAlbum,
  clearPhotos
}
//Connect recibe una funcion y un objeto json
export default connect(mapStateToProps,mapDispatchToProps)(Login);
