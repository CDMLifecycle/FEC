import React, {useState, useEffect, lazy, Suspense} from 'react';
import fetch from './fetch.js';
const CardCarousel = React.lazy(() =>  import('./CardCarousel.jsx'));
const ProductComparison = React.lazy(() => import('./ProductComparison.jsx'));
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
      <Suspense fallback={<div>...loading</div>}>
        <CardCarousel
          relatedProducts={relatedProducts}
          compareProducts={handleActionClick}
          updateProductOnClick={props.updateProductOnClick}
        />
      </Suspense>
      : <LoadingComponent />
      }
    </div>
  )
}

export default RelatedItems;