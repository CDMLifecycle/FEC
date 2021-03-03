import React, {useState} from 'react';

var ProductCard = (props) => {
  const [primaryImg, setPrimaryImg] = useState(props.product.photos[0].thumbnail_url);

  var defaultImg = 'https://climate.onep.go.th/wp-content/uploads/2020/01/default-image.png'

  var handleClick = () => {
    if (props.removeFromLooks) {
      props.removeFromLooks(props.product.id);
    } else if (props.compareProducts) {
      props.compareProducts(props.product);
    }
  }



  return(
    <div className='ProductCard'>
      <div className='ProductCard-img-container'>
        <img className='ProductCard-primary-img' src={primaryImg ? primaryImg : defaultImg}></img>
        <span onClick={handleClick} className='ProductCard-action-icon'>Click</span>
      </div>
      <div className='ProductCard-product-information'>
        <p>Category:{props.product.category}</p>
        <p className='ProductCard-product-information-name'>Product Name: {props.product.name}</p>
        <span className='ProductCard-product-information-price'>${props.product.default_price}</span>
        <div className='ProductCard-product-information-rating'>Rating out of 5: {props.product.rating}</div>
      </div>
    </div>
  )
};

export default ProductCard;