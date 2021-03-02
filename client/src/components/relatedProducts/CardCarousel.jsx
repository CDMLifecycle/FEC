import React, {useState, useRef} from 'react';
import AddToLooksCard from './AddToLooksCard.jsx';
import ProductCard from './ProductCard.jsx';
import CarouselArrow from './CarouselArrow.jsx';

var CardCarousel = (props) => {

  const [startingCardIndex, setStartingCardIndex] = useState(1);
  const carouselRef = useRef(null);

  var scroll = (direction) => {
    if (direction === 'back') {
      var amount = 500;
      carouselRef.current.scrollBy(amount * (startingCardIndex - props.relatedProducts.length + 3), 0);
      setStartingCardIndex(startingCardIndex - 1);
    } else if (direction === 'forward') {
      var amount = 500;
      carouselRef.current.scrollBy(amount * startingCardIndex, 0);
      setStartingCardIndex(startingCardIndex+1);
    }
  }
  return (
    <div className='CardCarousel'>
     {startingCardIndex < props.relatedProducts.length - 3 ? <CarouselArrow direction={'forward'} scroll={scroll} /> : null}
     {startingCardIndex > 1 ? <CarouselArrow direction={'back'} scroll={scroll} /> : null}
      <div ref={carouselRef} className='CardCarousel-Scroller'>
      {props.isLooks ? <AddToLooksCard /> : null}
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