import React, {useState, useEffect} from 'react';
import dummydata from './dummydata.js';
import ProductCard from './ProductCard.jsx';
import fetch from './fetch.js';
import CardCarousel from './CardCarousel.jsx';

var RelatedItems = (props) => {
  var fakeProps = dummydata.relatedItemsWithFullInformation;
  const [currentProductId, setCurrentProductId] = useState(props.productId);
  const [relatedProducts, setRelatedProducts] = useState(null);

  useEffect(() => {
    fetch.getRelatedProducts(currentProductId, (err, data) => {
      if (!err && data) {
        setRelatedProducts(data)
      } else {
        console.log("Error in fetching relatedItem data", err);
      }
    })
  }, [currentProductId])



  return (
    <div className='RelatedItems'>
      <h2>You May Also Like</h2>

     {relatedProducts ?
      <CardCarousel relatedProducts={relatedProducts} /> : null
      }
    </div>
  )
}

export default RelatedItems;