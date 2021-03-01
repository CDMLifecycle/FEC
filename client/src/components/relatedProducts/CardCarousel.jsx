import React, {useState, useEffect} from 'react';
import AddToLooksCard from './AddToLooksCard.jsx';
import ProductCard from './ProductCard.jsx';
import CarouselArrow from './CarouselArrow.jsx';

var CardCarousel = (props) => {


  return (
    <div className='CardCarousel'>
      <CarouselArrow direction={'forward'} />
      <div className='CardCarousel-Scroller'>
      {props.Looks ? <AddToLooksCard /> : null}
       {props.relatedProducts ?
        props.relatedProducts.map(item =>
          <ProductCard key={item.id} product={item} />)
        : null
        }
      </div>
    </div>
  )
}

export default CardCarousel;