import React, {useState, useEffect} from 'react';

var ThumbnailCarousel = (props) => {

  const [imageArray, setImageArray] = useState(null);

  useEffect(() => {
    let imgs = [];
    for (let photo of props.photos) {
      imgs.push(photo.thumbnail_url);
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
              <span className='ThumbnailCarousel-img-cell' src={img}></span>
            )}
          </div>
         )

      : null
    }
    </div>
  )
}

export default ThumbnailCarousel