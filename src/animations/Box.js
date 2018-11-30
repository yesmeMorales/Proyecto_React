import pose from 'react-pose';

export default pose.div({
  enter:{
    opacity: 1,
    delay: ({position})=> (position) * 50
  },
  exit:{
    opacity:0
  }
});
