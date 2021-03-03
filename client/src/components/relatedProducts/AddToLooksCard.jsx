import React, {useRef, useEffect} from 'react';

var AddToLooksCard = function(props) {
  return (
    <div onClick={props.addToLooks} className='AddToLooksCard'>
      <div className='AddToLooksCard-Icon'><span className="material-icons">add_box</span>
    </div>
      <p className='AddToLooksCard-p'>Add Current Item to Your Looks</p>
    </div>
  )
}

export default AddToLooksCard;