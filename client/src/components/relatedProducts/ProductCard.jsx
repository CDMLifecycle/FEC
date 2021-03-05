import React, {useState, useRef, useEffect} from 'react';

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

  var handleClick = () => {
    if (props.removeFromLooks) {
      props.removeFromLooks(props.product.id);
    } else if (props.compareProducts) {
      props.compareProducts(props.product);
    }
  }

  var saleClass = 'ProductCard-product-information-price'
  if (props.product.sale_price) {
    saleClass = 'ProductCard-product-information-price-discounted'
  }

  return(
    <div ref={cardRef} className='ProductCard'>
      <div className='ProductCard-img-container'>
        <div className='ProductCard-action-icon-background'>{
           props.compareProducts ? <span onClick={handleClick} className="material-icons ProductCard-action-icon">
           compare_arrows
           </span> :
           <span onClick={handleClick} className="material-icons ProductCard-action-icon ">remove_circle</span>
        }
        </div>
        <img className='ProductCard-primary-img' src={primaryImg}></img>
      </div>
      <div className='ProductCard-product-information'>
        <p className='ProductCard-product-information-category'>{props.product.category}</p>
        <p className='ProductCard-product-information-name'>{props.product.name.toUpperCase()}</p>
        <p className={saleClass}>${props.product.default_price.substring(0, props.product.default_price.indexOf('.'))}</p>
        {props.product.sale_price ? <p className='ProductCard-product-information-sale-price'>{props.product.sale_price}</p> : null}
        <p className='ProductCard-product-information-rating'>{props.product.rating ? props.product.rating : "product unrated"}</p>
      </div>
    </div>
  )
};

export default ProductCard;