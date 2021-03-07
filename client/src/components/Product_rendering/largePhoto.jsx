import Magnifier from 'react-magnifier';
import React, {useEffect} from 'react';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

 var largePhoto = (props) => {
       return (props.photo ?
        <CSSTransitionGroup
          transitionName="pageSliderRight"
          transitionAppear={true}
          transitionAppearTimeout={300}
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}
        >
      <Magnifier key={props.photo} onClick={props.fullscreen} className='largeImage show' id='lg' src={props.photo} width='auto' height='600'></Magnifier>
      </CSSTransitionGroup>
      : <div></div>)
  }

  export default largePhoto;
