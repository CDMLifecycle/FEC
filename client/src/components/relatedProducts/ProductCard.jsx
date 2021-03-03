import React, {useState} from 'react';

var ProductCard = (props) => {
  const [primaryImg, setPrimaryImg] = useState(props.product.photos[0].thumbnail_url);

  var defaultImg = 'https://climate.onep.go.th/wp-content/uploads/2020/01/default-image.png'

  return(
    <div className='ProductCard'>
      <div className='ProjectCard-img-container'>
        <img className='ProjectCard-primary-img' src={primaryImg ? primaryImg : defaultImg}></img>
        <span onClick={() => props.cardAction(props.product.id)} className='ProjectCard-action-icon'>Click</span>
      </div>
      <div className='ProjectCard-product-information'>
        <p>Category:{props.product.category}</p>
        <p className='ProjectCard-product-information-name'>Product Name: {props.product.name}</p>
        <span className='ProjectCard-product-information-price'>${props.product.default_price}</span>
        <div className='ProjectCard-product-information-rating'>Rating out of 5: {props.product.rating}</div>
      </div>
    </div>
  )
};

export default ProductCard;