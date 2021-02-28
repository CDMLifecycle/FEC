import React, {useState, useEffect} from 'react';
import dummydata from './dummydata.js';
import ProductCard from './ProductCard.jsx';
import fetch from './fetch.js';


var RelatedItems = (props) => {
  var fakeProps = dummydata.relatedItemsWithFullInformation;
  const [currentProductId, setCurrentProductId] = useState(props.productId);
  const [relatedProducts, setRelatedProducts] = useState(null);

  useEffect(() => {
    fetch.getRelatedProducts(currentProductId, (err, data) => {
      if (!err && data) {
        setRelatedProducts(data)
      } else {
        console.log(err);
      }
    })
  }, [currentProductId])



  return (
    <div className='RelatedItems'>
      <div className='RelatedItems-carousel-placeholder'>
        {relatedProducts ?
        relatedProducts.map(item =>
          <ProductCard key={item.id} product={item} />)
        : null
        }
      </div>
    </div>
  )
}

export default RelatedItems;