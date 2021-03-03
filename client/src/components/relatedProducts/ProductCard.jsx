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
        <span onClick={handleClick} className='ProductCard-action-icon'>{
         props.compareProducts ? <span className="material-icons">
         compare_arrows
         </span> :
         <span className="material-icons">remove_circle</span>
        }
        </span>
      </div>
      <div className='ProductCard-product-information'>
        <p>{props.product.category}</p>
        <p className='ProductCard-product-information-name'>{props.product.name}</p>
        <p className='ProductCard-product-information-price'>${props.product.default_price}</p>
        <p className='ProductCard-product-information-rating'>{props.product.rating}</p>
      </div>
    </div>
  )
};

export default ProductCard;