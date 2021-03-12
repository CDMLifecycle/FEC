import React, {useState, useRef, useEffect} from 'react';
import Stars from '../ratingsAndReviews/Stars.jsx';
import ThumbnailCarousel from './ThumbnailCarousel.jsx';
import './relatedProducts.css';

var ProductCard = (props) => {
  const [primaryImg, setPrimaryImg] = useState(null);
  const cardRef = useRef(null);

  useEffect(() => {

    if(props.product.photos[0].thumbnail_url) {
      setPrimaryImg(props.product.photos[0].thumbnail_url)
    } else {
      setPrimaryImg(defaultImg);
    }

    if (props.getWidthOfCard !== undefined) {
      props.getWidthOfCard(cardRef.current.offsetWidth);
    }
  }, []);

  var defaultImg = 'https://climate.onep.go.th/wp-content/uploads/2020/01/default-image.png'

  var handleActionClick = () => {
    if (props.removeFromLooks) {
      props.removeFromLooks(props.product.id);
    } else if (props.compareProducts) {
      props.compareProducts(props.product);
    }
  }

  var selectImage = (src) => {
    setPrimaryImg(src);
  }

  var saleClass = 'ProductCard-product-information-price'
  if (props.product.sale_price) {
    saleClass = 'ProductCard-product-information-price-discounted'
  }

  var cardClickHandler = (e) => {
    e.stopPropagation();
    var className = e.target.className;
    if (className === 'ProductCard' || className === 'ProductCard-primary-img' || className === 'ProductCard-product-information') {
      if (props.compareProducts) {
        props.updateProductOnClick(props.product.id, cardRef);
      }
    }
    // if (props.compareProducts) {
    //   props.updateProductOnClick(props.product.id, cardRef);
    // }
  }

  return(
    <div ref={cardRef} className='ProductCard' onClick={cardClickHandler}>
      <div className='ProductCard-img-container'>
        <div className='ProductCard-action-icon-background'>{
           props.compareProducts ?
             <span onClick={handleActionClick} className="material-icons ProductCard-action-icon">
               compare_arrows
             </span> :
             <span onClick={handleActionClick} className="material-icons ProductCard-action-icon">
               remove_circle
             </span>
        }</div>
        <img className='ProductCard-primary-img' alt='Product Image' src={primaryImg}></img>
      </div>

      <div className='ProductCard-product-information'>
        {props.compareProducts && props.product.stylePhotos.length > 1 ?
          <ThumbnailCarousel selectImage={selectImage} photos={props.product.stylePhotos} />
          : null
        }
        <p className='ProductCard-product-information-category'>{props.product.category}</p>
        <p className='ProductCard-product-information-name'>{props.product.name.toUpperCase()}</p>
        <p className={saleClass}>${props.product.default_price.substring(0, props.product.default_price.indexOf('.'))}</p>
        {props.product.sale_price ?
          <p className='ProductCard-product-information-sale-price'>{props.product.sale_price}</p> : null}
        <div className='ProductCard-product-information-rating'>
          {props.product.rating ?
            <Stars avgQtr={props.product.rating} size={15} />
            : "N/A"}
        </div>
      </div>
    </div>
  )
};

export default ProductCard;