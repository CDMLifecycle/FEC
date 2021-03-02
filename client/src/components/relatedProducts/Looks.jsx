import React, {useState} from 'react';
import CardCarousel from './CardCarousel.jsx';
import dummydata from './dummydata.js';

var Looks = (props) => {
  const [currentLooks, setCurrentLooks] = useState(props.products);
  return (
    <div className='Looks'>
      <h2>Your Looks</h2>
      <CardCarousel relatedProducts={currentLooks} isLooks={true}/>
    </div>
  )
}

export default Looks;