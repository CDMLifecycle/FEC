import React from 'react';
import axios from 'axios';
import RenderImages from './renderImages.jsx';
import LargePhoto from './largePhoto.jsx'
class Product_Detail extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      imageUrl: '',
      styles: [],
      photos: [],
      largePhoto: '',
    }
    this.getStyle = this.getStyle.bind(this);
    this.getPhotos = this.getPhotos.bind(this);
  }

  getStyle(event) {
    event.preventDefault();
    axios.get('/products/14034/styles')
      .then((result) => {
        console.log(result.data);
        this.setState({styles: result.data, photos: result.data.results[0].photos},
           () => { this.setState({largePhoto: this.state.photos[0].url}); }
        )
      })
      .catch((error) => {
        console.log(error);
      })
  }
  getPhotos(event) {
    event.preventDefault();
    for(var i = 0; i < this.state.photos.length; i++) {
      console.log(this.state.photos[i])
    }
  }

  render() {
    return(
      <div>
        <button type='button' onClick={this.getStyle}>style</button>
        <button type='button' onClick={this.getPhotos}>photos</button>
        <div className='containersInContainers'>
          <div className = 'allPhotoscontainer'>
            <div className = 'photoContainer'>
              <RenderImages photos={this.state.photos}/>
            </div>
            <div className = 'largePhoto'>
              <LargePhoto photo={this.state.largePhoto}/>
            </div>
          </div>
          <div className='containerColumn'>
            <div className='reviews'>
              Reviews Go HERE
            </div>
            <div className='q_c'>
              Quantity/Color GOES HERE
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Product_Detail