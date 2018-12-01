import React, { Component } from 'react';
import {connect} from 'react-redux';
import axios from 'axios';

import {setPhotos, clearPhotos, clearAlbum} from '../initializers/actions';
import PhotosList from '../components/PhotosList';

class Album extends Component{
  //Se manda a llamar cada vez que las props que se envian al componente se modifican
  componentDidUpdate(prevProps){
    if(this.props.mainAlbum && this.props.mainAlbum !== prevProps.mainAlbum) this.loadPhotos();

  }
  loadPhotos(){
    axios({
      method: 'POST',
      url: ' ',
      headers: {
        'Authorization': `Bearer ${this.props.token}`
      },
      data:{
        albumId: this.props.mainAlbum.id
      }
    }).then(r=>{
      console.log(r);
      this.props.setPhotos(r.data.mediaItems);
    })
  }
  render(){
    return(<PhotosList
            clearAlbum={this.props.clearAlbum}
            clearPhotos={this.props.clearPhotos}
            album={this.props.mainAlbum}
            photos={this.props.photos} />);
  }
}

const mapStateToProps = (state)=> ({
  mainAlbum: state.mainAlbum,
  token: state.token,
  photos: state.photos
});

const mapDispatchToProps = {
  setPhotos,
  clearAlbum,
  clearPhotos
}

export default connect(mapStateToProps,mapDispatchToProps)(Album);
