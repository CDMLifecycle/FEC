import React, {useState} from 'react';
import dummydata from './dummydata.js';
import ProductCard from './ProductCard.jsx';

var RelatedItems = (props) => {
  var fakeProps = dummydata.relatedItemsWithFullInformation;
  return (
    <div className='RelatedItems'>
      <div className='RelatedItems-carousel-placeholder'>
        {fakeProps.map(item =>
          <ProductCard key={item.id} product={item} />)}
      </div>
    </div>
  )
}

export default RelatedItems;