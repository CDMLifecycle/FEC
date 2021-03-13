import React, {useState, useEffect} from 'react';
import CardCarousel from './CardCarousel.jsx';
import rfdc from 'rfdc';
import fetch from './fetch.js';
import LoadingComponent from './LoadingComponent.jsx';
import './relatedProducts.css';
import {checkSession, addToLooksSession, removeFromLooksSession} from './helpers.js';

var Looks = (props) => {
  const [currentLooks, setCurrentLooks] = useState([]);
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
    checkSession(props, setCurrentLooks);
  }, [props.currentProductId])

  var addToLooks = () => {
    addToLooksSession(props, currentLooks, setCurrentLooks, currentProduct)
  }

  var removeFromLooks = (id) => {
    removeFromLooksSession(id, currentLooks, setCurrentLooks);
  }
  return (
    <div className='Looks'>
      <h2>YOUR LOOKS</h2>
      {currentProduct ? <CardCarousel removeFromLooks={removeFromLooks} relatedProducts={currentLooks} isLooks={true} addToLooks={addToLooks}/> : <LoadingComponent />}
    </div>
  )
}

export default Looks;