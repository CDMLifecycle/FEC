import React, {useRef, useEffect} from 'react';
import './relatedProducts.css';

var AddToLooksCard = function(props) {
  return (
    <div onClick={props.addToLooks} className='AddToLooksCard'>
      <div className='AddToLooksCard-Icon'><span id='add_box' className="material-icons">add_box</span>
    </div>
      <p className='AddToLooksCard-p'>ADD ITEM TO LOOKS</p>
    </div>
  )
}

export default AddToLooksCard;