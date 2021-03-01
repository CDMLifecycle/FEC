import React from 'react';
import axios from 'axios';
import RenderImages from './renderImages.jsx';
import LargePhoto from './largePhoto.jsx';
import { Rating } from '@material-ui/lab';
import StylesMap from './stylesMap.jsx';

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
      rating: 0,
      size: '',
      quantity: '',
      color: ''
    }
    this.getStyle = this.getStyle.bind(this);
    this.changeLarge = this.changeLarge.bind(this);
    this.fun = this.fun.bind(this);
    this.reviewSet = this.reviewSet.bind(this);
    this.sizeSet = this.sizeSet.bind(this);
    this.quantitySet = this.quantitySet.bind(this);
    this.colorSet = this.colorSet.bind(this);
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
      arr.push(<option value={`${i}`} key={`${i}`}>{i}</option>)
    }
    return arr;
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.id !== this.state.id) {
      this.getStyle(this.state.id);
    }
  }
  reviewSet (event) {
    var val = Number(event.target.value);
    this.setState({rating: val});
  }
  sizeSet(event) {
    this.setState({size: document.getElementById('sizeId').value});
  }
  quantitySet(event) {
    this.setState({quantity: document.getElementById('quantityId').value});
  }
  colorSet(val) {
    this.setState({color: val});
  }

  render() {
    var func = this.state.products[0] ? <div className='descriptionText'>Product Description: {this.state.products[0].description}</div> : <div></div>
    var productName = this.state.products[0] ? <div className='productName'>{this.state.products[0].name} </div> : <div></div>
    var categoryName = this.state.products[0] ? <div className='categoryName'>{this.state.products[0].category}</div> : <div></div>
    var price = this.state.products[0] ? <div className='priceCost'>Price: {this.state.products[0].default_price}</div> : <div></div>
    var styles = this.state.photos ? <StylesMap photos={this.state.photos} colorSet={this.colorSet}/> : <div></div>
    var selectedStyles = this.state.color ? this.state.color : 'Selected Styles'

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
              Reviews: <Rating value={this.state.rating}
                precision={0.5}
                max={5}
                name="unique-rating"
                onClick={this.reviewSet}
              />
            </div>
            {categoryName}
            {productName}
            {price}

              <div className='styleFont'>Styles > {selectedStyles}</div>
            <div className='styleContainer'>
              {styles}
            </div>
            <div className='quantity_Size_Container'></div>
              <div className='q_c'>
                  Quantity:
                <select id='quantityId' onChange={this.quantitySet}>
                  {this.fun()}
                </select>
              </div>
              <div className='size'>
                Size:
                <select id='sizeId' onChange={this.sizeSet}>
                  <option key='holder'>SELECT SIZE</option>
                  <option value='XS' key='XS'>XS</option>
                  <option value='S' key='S'>S</option>
                  <option value='M' key='M'>M</option>
                  <option value='L' key='L'>L</option>
                  <option value='XL' key='XL'>XL</option>
                  <option value='XXL' key='XXL'>XXL</option>
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