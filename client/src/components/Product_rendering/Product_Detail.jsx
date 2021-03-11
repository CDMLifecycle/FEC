import React from 'react';
import axios from 'axios';
import RenderImages from './renderImages.jsx';
import LargePhoto from './largePhoto.jsx';
import StylesMap from './stylesMap.jsx';
import Size from './Size.jsx';
import Quantity from './Quantity.jsx';
import Ratings from './Ratings.jsx';
import Social from './Social_Media.jsx';

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
      quantity: 0,
      color: '',
      metadata: {},
      fullscreen: false,
      hf: false,
      index: 0,
      direction: '',
    }
    this.getStyle = this.getStyle.bind(this);
    this.changeLarge = this.changeLarge.bind(this);
    this.sizeSet = this.sizeSet.bind(this);
    this.quantityDecrease = this.quantityDecrease.bind(this);
    this.quantityIncrease = this.quantityIncrease.bind(this);
    this.colorSet = this.colorSet.bind(this);
    this.fullscreen = this.fullscreen.bind(this);
    this.halffullscreen = this.halffullscreen.bind(this);
    this.toggleSize = this.toggleSize.bind(this);
    this.changeIndexRight = this.changeIndexRight.bind(this);
    this.changeIndexLeft = this.changeIndexLeft.bind(this);
  }

  componentDidMount() {
    if (this.props.productID) {
      this.getStyle(this.props.productID);
    }
  }

  getStyle(InId) {
    var url = '/products/'  + InId + '/styles';
    axios.get(url)
      .then((result) => {
        this.setState({styles: result.data, photos: result.data.results, largePhoto: result.data.results[0].photos[0].url, color: ''})
      })
      .catch((error) => {
        console.log(error);
      })
  }
  changeLarge(event, url,index, direct) {
    event.preventDefault();
    // document.getElementById(index).scrollIntoView({behavior: 'smooth'});
    var target = document.getElementById(index);
    target.parentNode.scrollTop = target.offsetTop;
    var prev = this.state.largePhoto;
    this.setState({largePhoto: url, index: index, prevPhoto: prev, slide: true, direction: direct} );
  }
  changeIndexRight(event) {
    event.preventDefault();
    var arr = this.state.photos;
    var newIndex = this.state.index + 1;
    if (this.state.index === (arr.length - 1)) {
      this.changeLarge(event, arr[0].photos[0].url, 0, 'right');
    } else {
      this.changeLarge(event, arr[newIndex].photos[0].url,newIndex, 'right');
    }
  }
  changeIndexLeft(event) {
    event.preventDefault();
    var arr = this.state.photos;
    var arrlen = arr.length - 1;
    if (this.state.index === 0) {
      this.changeLarge(event, arr[arrlen].photos[0].url, arrlen, 'left');
    } else {
      var newIndex = this.state.index - 1;
      this.changeLarge(event, arr[newIndex].photos[0].url,newIndex, 'left');
    }
  }

  static getDerivedStateFromProps(props, state) {
    var returnObj = {};
    if(props.searchedArr[0]) {
      if(state.products !== props.searchedArr) {
        return {products: props.searchedArr, id: props.productID}
      }
    }
    return null;
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.id !== this.state.id) {
      this.getStyle(this.state.id);
    }
    if(prevState.metadata !== this.props.Metadata) {
      this.setState({metadata: this.props.Metadata}, () => {
        if(this.props.Metadata.totals) {
          this.setState({rating: this.props.Metadata.totals.avgRating});
        }
      });
    }
  }
  sizeSet(event) {
    this.setState({size: event.target.value});
  }
  quantityDecrease(event) {
    event.preventDefault();
    if(this.state.quantity > 0) {
      this.setState({quantity: this.state.quantity - 1});
    }
  }
  quantityIncrease(event) {
    event.preventDefault();
    this.setState({quantity: this.state.quantity + 1});
  }
  colorSet(val) {
    this.setState({color: val});
  }
  fullscreen() {
    if (this.state.fullscreen) {
      document.getElementById('lg').style.transform = 'scale(1)';
      document.getElementById('lg').style.zIndex = '1';
      document.getElementById('lg').style.position = 'relative';
      document.getElementById('lg').style.maxWidth = '850px';

      this.setState({fullscreen: false});
    } else {
      document.getElementById('lg').style.transform = 'scale(5)';
      document.getElementById('lg').style.zIndex = '102';
      document.getElementById('lg').style.position = 'absolute';
      this.setState({fullscreen: true});
    }
  }
  halffullscreen() {
    if (this.state.hf) {
      document.getElementById('lg').style.transform = 'scale(1)';
      document.getElementById('lg').style.zIndex = '1';
      document.getElementById('lg').style.position = 'relative';
      document.getElementById('lg').style.maxWidth = '850px';

      this.setState({hf: false});
    } else {
      document.getElementById('lg').style.maxWidth = 'none';
      document.getElementById('lg').style.transform = 'scale(3)';
      document.getElementById('lg').style.zIndex = '102';
      document.getElementById('lg').style.position = 'absolute';

      this.setState({hf: true});
    }
  }
  toggleSize(event) {
    var elems = document.getElementsByClassName('sizeButton');
    for (var i = 0; i < elems.length; i++ ) {
      elems[i].style.backgroundColor = '';
      elems[i].style.color = 'black';
    }
    if(event.target.style.backgroundColor === '') {
      event.target.style.backgroundColor = 'black';
      event.target.style.color = 'white';
    }
  }

  render() {
    var description = this.state.products[0] ?
    <div className='productDescriptionContainer'>
      <div className='descriptionBox'>
      <div className='sloganText'>
        "{this.state.products[0].slogan}"
        </div>
        <div className='descriptionText'>
        {this.state.products[0].description}
        </div>
      </div>
      <div className='boxCheckout'>
        <button id='checkout' className='Checkout'>
          Add To Cart
          <i className="fa fa-shopping-cart" style={{fontSize:'40px'}}></i>
        </button>
      </div>
    </div>
     : <div></div>
    var productName = this.state.products[0] ? <div className='productName'>{this.state.products[0].name.toUpperCase()} </div> : <div></div>
    var categoryName = this.state.products[0] ? <div className='categoryName'>{this.state.products[0].category}</div> : <div></div>
    var price = this.state.products[0] ? <div className='priceCost'>${Math.trunc(this.state.products[0].default_price)}</div> : <div></div>
    var styles = this.state.photos ? <StylesMap photos={this.state.photos} colorSet={this.colorSet}/> : <div></div>
    var selectedStyles = this.state.color ? this.state.color : ''

    return(
      <div className='productDisplay'>
        <div className='containersInContainers'>
          <div className='pictureBackground'>
            <div className = 'allPhotoscontainer'>
              <div className = 'photoContainer'>
                <RenderImages changeLarge={this.changeLarge} photos={this.state.photos}/>
              </div>
              <div className = 'largePhoto'>
              <button href='#lg' id='fs' onClick={this.fullscreen}>
                  <img src='https://img.icons8.com/material-outlined/2x/full-screen.png' width='30px' height='30px'></img>
                </button>
                <button type='button' className='leftScroller leftright' onClick={this.changeIndexLeft}>
                  <i className="fa fa-arrow-left" aria-hidden="true"></i>
                </button>
                <LargePhoto photo={this.state.largePhoto} fullscreen={this.halffullscreen} prev={this.state.prevPhoto} direction={this.state.direction}/>
                <button type='button' className='rightScroller leftright' onClick={this.changeIndexRight}>
                  <i className="fa fa-arrow-right" aria-hidden="true"></i>
                </button>
              </div>
            </div>
          </div>
          <div className='containerColumn'>
            <Ratings rating={this.state.rating}/>
            {categoryName}
            {productName}
            {price}

              <div className='styleFont'> { selectedStyles}</div>
            <div className='styleContainer'>
              {styles}
            </div>
              <Size toggleSize={this.toggleSize}/>
              <Quantity quantity={this.state.quantity} quantityDecrease={this.quantityDecrease} quantityIncrease={this.quantityIncrease}/>
              <Social />
          </div>
        </div>
        {description}

      </div>
    )
  }
}

export default Product_Detail