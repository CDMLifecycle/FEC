import React, {useState, useEffect} from 'react';
import './relatedProducts.css';
import {makePhotoMatrix} from './utility';

var ThumbnailCarousel = (props) => {

  const [imageArray, setImageArray] = useState(null);
  // var makePhotoMatrix = (photos) => {
  //   let imgs = [];
  //   for (let photo of photos) {
  //     imgs.push(photo);
  //   }
  //   let rowsOfImages = []
  //   for (let i = 0; i < imgs.length; i+= 4) {
  //     rowsOfImages.push(imgs.slice(i, i + 4));
  //   }
  //   return rowsOfImages;
  // }

  useEffect(() => {
    for (let photo of props.photos) {
      if(photo === null) {
        return;
      }
    }
    setImageArray(makePhotoMatrix(props.photos));
  }, []);

  var handleClick = (src) => {
    props.selectImage(src);
  }

  return (
    <div className='ThumbnailCarousel'>
      {imageArray ?
        imageArray.map((fourImgArray, index) =>
          <div key={`row${index}`} className='ThumbnailCarousel-row'>
            {fourImgArray.map((img, index) =>
              <img className='ThumbnailCarousel-img-cell' alt='thumbnail-img' key={img ? `${img}-${index}` : `blank${index + 1}`} onClick={() => handleClick(img)} src={img}></img>
            )}
          </div>
         )

      : null
    }
    </div>
  )
}

export default ThumbnailCarousel