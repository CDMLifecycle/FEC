import React from 'react';
import axios from 'axios';
import RenderImages from './renderImages.jsx';
import LargePhoto from './largePhoto.jsx'
class Product_Detail extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
      imageUrl: '',
      styles: [],
      photos: [],
      largePhoto: '',
    }
    this.getStyle = this.getStyle.bind(this);
    this.getPhotos = this.getPhotos.bind(this);
    this.changeLarge = this.changeLarge.bind(this);
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
  changeLarge(event, url) {
    event.preventDefault();
    this.setState({largePhoto: url});
  }

  // componentDidMount() {
  //   axios.get('/products')
  //   .then((res) => {
  //     this.setState({products: res.data});
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   })
  // }
  static getDerivedStateFromProps(props, products) {
    if(products !== props.searchedArr) {
      return {products: props.searchedArr};
    }
    return null;
  }

  render() {
    var func = this.state.products[0] ? <div className='descriptionText'>Product Description: {this.state.products[0].description}</div> : <div></div>

    return(
      <div>
        <button type='button' onClick={this.getStyle}>style</button>
        <button type='button' onClick={this.getPhotos}>photos</button>
        <div className='containersInContainers'>
          <div className = 'allPhotoscontainer'>
            <div className = 'photoContainer'>
              <RenderImages changeLarge={this.changeLarge} photos={this.state.photos}/>
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
        {func}
      </div>
    )
  }
}

export default Product_Detail