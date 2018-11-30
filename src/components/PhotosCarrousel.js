import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import {PoseGroup} from 'react-pose';
import {withStyles} from '@material-ui/core/styles';

import Box from '../animations/Box';

function PhotosCarrousel(props){
  return(
    <div className={props.classes.container}>
      <PoseGroup>
          {props.photos.map((photo,index)=>{
            return(
              <Box key={photo.id} position={index} className={props.classes.card}>
                  <Card>
                    <img src={photo.baseUrl} className={props.classes.imgg} />
                    <CardContent>
                      <Typography variant="caption" component="p">
                        {photo.filename}
                      </Typography>
                    </CardContent>
                  </Card>
              </Box>
            );
          })}
      </PoseGroup>
    </div>
  );
}
export default withStyles({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    padding: '1em 0'
  },
  imgg: {
    maxWidth:'100%',
    heigh: 'auto'
  },
  card:{
    width:'300px',
    marginRight: '1em'
  }
})(PhotosCarrousel);
