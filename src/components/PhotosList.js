import React from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {withStyles} from '@material-ui/core/styles';

import PhotosCarrousel from './PhotosCarrousel';

function PhotosList(props){

  function clear(){
    props.clearAlbum();
    props.clearPhotos();
  }

  return(
    <div className={props.classes.topSpace}>
      { props.album && [
          <Typography key='album-title' variant="h4" component="h2">{props.album ? props.album.title :''}</Typography>,
          <Button key='album-back-button' onClick={clear}>Regresar</Button>,
          <Typography key='album-subtitle' variant="headline" component="h4">Fotos del álbum</Typography>,
          <Typography key='album-caption' variant="caption" component="p">{props.photos.length} foto(s) en este álbum</Typography>,

        ]
       }
       <PhotosCarrousel key='album-carrousel' photos={props.photos} />
    </div>
  )
}

export default withStyles({
  topSpace:{
    marginTop:'2em'
  }
})(PhotosList);
