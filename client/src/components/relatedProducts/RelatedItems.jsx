import React, {useState, useEffect} from 'react';
import dummydata from './dummydata.js';
import ProductCard from './ProductCard.jsx';
import fetch from './fetch.js';
import CardCarousel from './CardCarousel.jsx';
import ProductComparison from './ProductComparison.jsx';


var RelatedItems = (props) => {
  var fakeProps = dummydata.relatedItemsWithFullInformation;
  const [currentProductId, setCurrentProductId] = useState(props.productId);
  const [relatedProducts, setRelatedProducts] = useState(null);
  const [compareModel, setCompareModel] = useState(false);
  const [comparedProduct, setComparedProduct] = useState(null);

  useEffect(() => {
    fetch.getRelatedProducts(currentProductId, (err, data) => {
      if (!err && data) {
        setRelatedProducts(data)
      } else {
        console.log("Error in fetching relatedItem data", err);
      }
    })
  }, [currentProductId])

  var handleActionClick = (relatedProduct) => {
    setCompareModel(true);
    setComparedProduct(relatedProduct);
  }

  return (
    <div className='RelatedItems'>
      <h2>You May Also Like</h2>
     {comparedProduct && compareModel ? <ProductComparison currentProduct={props.currentProductInformation} comparedProduct={comparedProduct} /> : null}
     {relatedProducts ?
      <CardCarousel relatedProducts={relatedProducts} compareProducts={handleActionClick}/> : null
      }
    </div>
  )
}

export default RelatedItems;