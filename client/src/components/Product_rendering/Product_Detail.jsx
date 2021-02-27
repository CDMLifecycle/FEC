import React from 'react';
import axios from 'axios';
import RenderImages from './renderImages.jsx';
import LargePhoto from './largePhoto.jsx';
class Product_Detail extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
      imageUrl: '',
      styles: [],
      photos: [],
      largePhoto: '',
      id: '',
    }
    this.getStyle = this.getStyle.bind(this);
    this.changeLarge = this.changeLarge.bind(this);
    this.fun = this.fun.bind(this);
  }
  getStyle(InId) {
    var url = '/products/'  + InId + '/styles';
    axios.get(url)
      .then((result) => {
        this.setState({styles: result.data, photos: result.data.results, largePhoto: result.data.results[0].photos[0].url})
      })
      .catch((error) => {
        console.log(error);
      })
  }
  changeLarge(event, url) {
    event.preventDefault();
    this.setState({largePhoto: url} );
  }

  static getDerivedStateFromProps(props, state) {
    if(props.searchedArr[0]) {
      if(state.products !== props.searchedArr) {
        return {products: props.searchedArr, id: props.productID};
      }
    }
    return null;
  }
  fun() {
    var arr = [];
    for(var i = 0; i < 30; i++) {
      arr.push(<option key={`${i}`}>{i}</option>)
    }
    return arr;
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.id !== this.state.id) {
      this.getStyle(this.state.id);
    }
  }


  render() {
    var func = this.state.products[0] ? <div className='descriptionText'>Product Description: {this.state.products[0].description}</div> : <div></div>
    var productName = this.state.products[0] ? <div className='productName'>{this.state.products[0].name} </div> : <div></div>
    return(
      <div>
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
            {productName}
            <div className='q_c'>
                Quantity:
              <select>
                {this.fun()}
              </select>
                Size:
                <select>
                  <option key='holder'>SELECT SIZE</option>
                  <option key='XS'>XS</option>
                  <option key='S'>S</option>
                  <option key='M'>M</option>
                  <option key='L'>L</option>
                  <option key='XL'>XL</option>
                  <option key='XXL'>XXL</option>
                </select>
            </div>
          </div>
        </div>
        {func}
      </div>
    )
  }
}

export default Product_Detail