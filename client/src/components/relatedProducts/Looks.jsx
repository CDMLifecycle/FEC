import React, {useState, useEffect} from 'react';
import CardCarousel from './CardCarousel.jsx';
import dummydata from './dummydata.js';
import rfdc from 'rfdc';
import fetch from './fetch.js';
import LoadingComponent from './LoadingComponent.jsx';

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
    //look for session storage
  var sessionLooks = props.getLooksInSession();
  if (sessionLooks && sessionLooks.length && sessionLooks.length > 0) {
    setCurrentLooks(sessionLooks)
  }

  }, [props.currentProductId])

var addToLooks = () => {
  if (currentLooks.length > 0) {
    var clone = rfdc();
    for (let product of currentLooks) {
      if (product.id === props.currentProductId) {
        return;
      }
    }
    var looksCopy = clone(currentLooks);
    looksCopy.unshift(currentProduct);
    setCurrentLooks(looksCopy);
    //update session storage
    window.sessionStorage.removeItem('Looks');
    props.updateLooksInSession(looksCopy);
  } else {
    setCurrentLooks([currentProduct])
    window.sessionStorage.removeItem('Looks');
    props.updateLooksInSession([currentProduct]);
  }
}

var removeFromLooks = (id) => {
  var updatedLooks = currentLooks.filter((product) => product.id !== id);
  setCurrentLooks(updatedLooks);
  //update session storage;
  window.sessionStorage.removeItem('Looks');
  window.sessionStorage.setItem('Looks', JSON.stringify(updatedLooks));
}




  // var addToLooks = () => {
  //   var clone = rfdc();
  //   for (let product of currentLooks) {
  //     if (product.id === props.currentProductId) {
  //       return;
  //     }
  //   }
  //   var looksCopy = clone(currentLooks);
  //   looksCopy.unshift(currentProduct);
  //   setCurrentLooks(looksCopy);
  // }

  // var removeFromLooks = (id) => {
  //   var updatedLooks = currentLooks.filter((product) => product.id !== id);
  //   setCurrentLooks(updatedLooks);
  // }


  return (
    <div className='Looks'>
      <h2>YOUR LOOKS</h2>
      {currentProduct ? <CardCarousel removeFromLooks={removeFromLooks} relatedProducts={currentLooks} isLooks={true} addToLooks={addToLooks}/> : <LoadingComponent />}
    </div>
  )
}

export default Looks;