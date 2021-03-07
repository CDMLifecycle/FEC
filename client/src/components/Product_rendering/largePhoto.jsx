import Magnifier from 'react-magnifier';
import React, {useEffect} from 'react';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

 var largePhoto = (props) => {
       return (props.photo ?
        <CSSTransitionGroup
        transitionName='show'
        transitionEnterTimeout={300}
        transitionLeaveTimeout={300}
        >
      <Magnifier key={props.photo} onClick={props.fullscreen} className='largeImage' id='lg' src={props.photo} width='auto' height='600'></Magnifier>
      </CSSTransitionGroup>
      : <div></div>)
  }

  export default largePhoto;
