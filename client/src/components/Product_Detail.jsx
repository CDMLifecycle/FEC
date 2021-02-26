import React from 'react';
import axios from 'axios';
import RenderImages from './renderImages.jsx';
class Product_Detail extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      imageUrl: '',
      styles: [],
      photos: [],
    }
    this.getStyle = this.getStyle.bind(this);
    this.getPhotos = this.getPhotos.bind(this);
  }

  getStyle(event) {
    event.preventDefault();
    axios.get('/products/14034/styles')
      .then((result) => {
        console.log(result.data);
        this.setState({styles: result.data, photos: result.data.results[0].photos});
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
  // getPhotos(event) {
  //   this.setState({pr})
  // }
  render() {
    return(
      <div>
        <button onClick={this.getStyle}>style</button>
        <button onClick={this.getPhotos}>photos</button>
        <RenderImages photos={this.state.photos}/>
      </div>
    )
  }
}

export default Product_Detail