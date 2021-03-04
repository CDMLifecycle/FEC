import React, {useState, useEffect} from 'react';
import CardCarousel from './CardCarousel.jsx';
import dummydata from './dummydata.js';
import rfdc from 'rfdc';
import fetch from './fetch.js';

var Looks = (props) => {
  const [currentLooks, setCurrentLooks] = useState(props.products);
  const [currentProduct, setCurrentProduct] = useState(null);

  useEffect(() => {
    fetch.getCurrentProductInformation(props.currentProductId, (err, data) => {
      if (err) {
        console.log(err);
      } else {
        setCurrentProduct(data);
        props.setCurrentProduct(data);
      }
    })
  }, [props.currentProductId])


  var addToLooks = () => {
    var clone = rfdc();
    for (let product of currentLooks) {
      if (product.id === props.currentProductId) {
        return;
      }
    }
    var looksCopy = clone(currentLooks);
    looksCopy.unshift(currentProduct);
    setCurrentLooks(looksCopy);
  }

  var removeFromLooks = (id) => {
    var updatedLooks = currentLooks.filter((product) => product.id !== id);
    setCurrentLooks(updatedLooks);
  }


  return (
    <div className='Looks'>
      <h2>Your Looks</h2>
      <CardCarousel removeFromLooks={removeFromLooks} relatedProducts={currentLooks} isLooks={true} addToLooks={addToLooks}/>
    </div>
  )
}

export default Looks;