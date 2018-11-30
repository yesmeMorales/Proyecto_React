import React, {Component} from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import {setAlbums, clearAlbums, setAlbum } from '../initializers/actions';

import AlbumsList from '../components/AlbumsList';

class Albums extends Component{
  // constructor(props){
  //   super(props);
  //   this.state = {
  //     showAlbums: false
  //   }
  // }

  componentDidMount(){
    //this.loadPhotos();
    if (process.env.NODE_ENV === 'production'){
      this.loadPhotos();
    }else{
        // import('../data/albums').then(module=>{
        //   this.props.setAlbums(module.default.albums)
        //   console.log(module.default);
        // })
        this.loadPhotos();
    }
    // setTimeout(()=> this.setState({showAlbums: true}),5000)
    //setTimeout(()=> this.props.clearAlbums(),5000)
  }

loadPhotos(){
  axios({
    url: 'https://photoslibrary.googleapis.com/v1/albums',
    method: 'GET',
    headers: {
      //template stream de javascript
      //Validamos que tenemos permisos para usar cualquier servicio web de google
      'Authorization': `Bearer ${this.props.token}`
    }
  }).then(r=>{
    this.props.setAlbums(r.data.albums);
  }).catch(console.log);
}

  render(){
    return (<AlbumsList
            mainAlbum={this.props.mainAlbum} 
            setAlbum={this.props.setAlbum}
            albums={this.props.albums} />);
  }
}

const mapStateToProps = (state)=> ({
  albums: state.albums,
  token: state.token,
  mainAlbum: state.mainAlbum
});

const mapDispatchToProps = {
  setAlbums,
  clearAlbums,
  setAlbum
}

export default connect(mapStateToProps,mapDispatchToProps)(Albums);
