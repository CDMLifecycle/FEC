import React, {useState} from 'react';

var ProductCard = (props) => {
  const [primaryImg, setPrimaryImg] = useState(props.product.photos[0].thumbnail_url);

  return(
    <div onClick={() => console.log('this click should navigate the page to this product')} className='ProductCard'>
      <div className='ProjectCard-img-container'>
        <img className='ProjectCard-primary-img' src={primaryImg}></img>
        <img className='ProjectCard-compare-icon'></img>
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