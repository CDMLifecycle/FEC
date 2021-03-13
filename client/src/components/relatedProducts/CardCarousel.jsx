import React, {useState, useRef, lazy, Suspense} from 'react';
import AddToLooksCard from './AddToLooksCard.jsx';
const ProductCard = React.lazy(() => import('./ProductCard.jsx'));
import CarouselArrow from './CarouselArrow.jsx';
import {scrollCardByWidth} from './helpers.js';
import './relatedProducts.css';

var CardCarousel = (props) => {

  const [startingCardIndex, setStartingCardIndex] = useState(1);
  const carouselRef = useRef(null);
  const [cardWidth, setCardWidth] = useState(null);

  var getWidthOfCard = (width) => {
    setCardWidth(width);
  }

  var scroll = (direction) => {
    scrollCardByWidth(direction, cardWidth, carouselRef, setStartingCardIndex, startingCardIndex)
  }

  return (
    <div className='CardCarousel'>
      <div className='CardCarousel-Arrows'>
        {props.relatedProducts && startingCardIndex < props.relatedProducts.length - 3 ?
          <CarouselArrow direction={'forward'}
            scroll={scroll}
          />
        : null}
        {startingCardIndex > 1 ?
          <CarouselArrow
            direction={'back'}
            scroll={scroll}
          />
        : null}
      </div>

      <div ref={carouselRef} className='CardCarousel-Scroller'>
        {props.isLooks ?
          <AddToLooksCard
            addToLooks={props.addToLooks}
          />
        : null}
        {props.relatedProducts && props.relatedProducts.length > 0 ?
        props.relatedProducts.map(
          (item, index) => index === 0 ?
          <Suspense fallback={<div>Loading</div>}>
            <ProductCard
              getWidthOfCard={getWidthOfCard}
              removeFromLooks={props.removeFromLooks}
              compareProducts={props.compareProducts}
              key={item.id + '_' + index}
              product={item}
              updateProductOnClick={props.updateProductOnClick}
            />
          </Suspense>
          :
          <Suspense fallback={<div>Loading</div>}>
            <ProductCard
              removeFromLooks={props.removeFromLooks}
              compareProducts={props.compareProducts}
              key={item.id + '_' + index}
              product={item}
              updateProductOnClick={props.updateProductOnClick}
            />
            </Suspense>)
        : null}
      </div>
    </div>
  )
}

export default CardCarousel;