import React, {useState, useEffect} from 'react';

var ThumbnailCarousel = (props) => {

  const [imageArray, setImageArray] = useState(null);

  useEffect(() => {
    let imgs = [];
    for (let photo of props.photos) {
      imgs.push(photo);
    }
    let rowsOfImages = []
    for (let i = 0; i < imgs.length; i+= 4) {
      rowsOfImages.push(imgs.slice(i, i + 4));
    }
    setImageArray(rowsOfImages);
  }, []);

  return (
    <div className='ThumbnailCarousel'>
      {imageArray ?
        imageArray.map((fourImgArray) =>
          <div className='ThumbnailCarousel-row'>
            {fourImgArray.map(img =>
              <img className='ThumbnailCarousel-img-cell' src={img}></img>
            )}
          </div>
         )

      : null
    }
    </div>
  )
}

export default ThumbnailCarousel