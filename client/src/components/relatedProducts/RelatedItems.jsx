import React, {useState, useEffect} from 'react';
import ProductCard from './ProductCard.jsx';
import fetch from './fetch.js';
import CardCarousel from './CardCarousel.jsx';
import ProductComparison from './ProductComparison.jsx';
import LoadingComponent from './LoadingComponent.jsx';
import './relatedProducts.css';

var RelatedItems = (props) => {
  const [currentProductId, setCurrentProductId] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState(null);
  const [compareModel, setCompareModel] = useState(false);
  const [comparedProduct, setComparedProduct] = useState(null);

  useEffect(() => {
    fetch.getRelatedProducts(props.productId, (err, data) => {
      if (!err && data) {
        setRelatedProducts(data)
      } else {
        console.log("Error in fetching relatedItem data", err);
      }
    })
  }, [props.productId])

  var handleActionClick = (relatedProduct) => {
    setCompareModel(true);
    setComparedProduct(relatedProduct);
  }

  var closeComparisonModel = () => {
    setCompareModel(false);
  }

  return (
    <div className='RelatedItems'>
      <h2>YOU MAY ALSO LIKE</h2>
      {comparedProduct && compareModel && props.currentProductInformation ?
        <ProductComparison
          currentProduct={props.currentProductInformation}
          comparedProduct={comparedProduct}
          closeComparisonModel={closeComparisonModel}/>
      : null}
      {relatedProducts ?
        <CardCarousel
          relatedProducts={relatedProducts}
          compareProducts={handleActionClick}
          updateProductOnClick={props.updateProductOnClick}
        />
      : <LoadingComponent />
      }
    </div>
  )
}

export default RelatedItems;