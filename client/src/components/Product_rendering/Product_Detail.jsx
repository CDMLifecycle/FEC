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
      quantity: 0,
      color: '',
      metadata: {},
      fullscreen: false,
      hf: false,
      index: 0,
      slide: false,
    }
    this.getStyle = this.getStyle.bind(this);
    this.changeLarge = this.changeLarge.bind(this);
    this.reviewSet = this.reviewSet.bind(this);
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
  changeLarge(event, url,index) {
    event.preventDefault();
    // document.getElementById(index).scrollIntoView({behavior: 'smooth'});
    var target = document.getElementById(index);
    target.parentNode.scrollTop = target.offsetTop;
    var prev = this.state.largePhoto;
    this.setState({largePhoto: url, index: index, prevPhoto: prev, slide: true} );
  }
  changeIndexRight(event) {
    event.preventDefault();
    var arr = this.state.photos;
    var newIndex = this.state.index + 1;
    if (this.state.index === (arr.length - 1)) {
      this.changeLarge(event, arr[0].photos[0].url, 0);
    } else {
      this.changeLarge(event, arr[newIndex].photos[0].url,newIndex);
    }
  }
  changeIndexLeft(event) {
    event.preventDefault();
    var arr = this.state.photos;
    var arrlen = arr.length - 1;
    if (this.state.index === 0) {
      this.changeLarge(event, arr[arrlen].photos[0].url, arrlen);
    } else {
      var newIndex = this.state.index - 1;
      this.changeLarge(event, arr[newIndex].photos[0].url,newIndex);
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

  reviewSet (event) {
    var val = Number(event.target.value);
    this.setState({rating: val});
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
      document.getElementById('lg').style.maxWidth = '950px';

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
      document.getElementById('lg').style.maxWidth = '950px';

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
      <div className='descriptionText'>
        <div className='DescriptionFont'>DESCRIPTION</div>
        {this.state.products[0].description}
        </div>
      <div className='sloganText'>
        '{this.state.products[0].slogan}'
        </div>
      <div className='descriptionText'>
        <button className='Checkout'>
          Checkout
          <i class="fa fa-shopping-cart" style={{fontSize:'30px'}}></i>
        </button>
      </div>
    </div>
     : <div></div>
    var productName = this.state.products[0] ? <div className='productName'>{this.state.products[0].name.toUpperCase()} </div> : <div></div>
    var categoryName = this.state.products[0] ? <div className='categoryName'>{this.state.products[0].category}</div> : <div></div>
    var price = this.state.products[0] ? <div className='priceCost'>Price: {this.state.products[0].default_price}</div> : <div></div>
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
              <button href='#lg' id='fs' onClick={this.fullscreen}>
                  <img src='https://img.icons8.com/material-outlined/2x/full-screen.png' width='30px' height='30px'></img>
                </button>
              <div className = 'largePhoto'>
                <button type='button' className='leftScroller leftright' onClick={this.changeIndexLeft}>
                  <i className="fa fa-arrow-left" aria-hidden="true"></i>
                </button>
                <LargePhoto photo={this.state.largePhoto} fullscreen={this.halffullscreen} prev={this.state.prevPhoto} slide={this.state.slide}/>
                <button type='button' className='rightScroller leftright' onClick={this.changeIndexRight}>
                  <i className="fa fa-arrow-right" aria-hidden="true"></i>
                </button>
              </div>
            </div>
          </div>
          <div className='containerColumn'>
            <div className='reviews'>
              <Rating value={this.state.rating}
                precision={0.5}
                max={5}
                name="unique-rating"
                readOnly
              />
            </div>
            {categoryName}
            {productName}
            {price}

              <div className='styleFont'> Color: {selectedStyles}</div>
            <div className='styleContainer'>
              {styles}
            </div>

              <div id='size'>
                  <button onClick={this.toggleSize} className='sizeButton' id='XS' value='XS' key='XS'>XS</button>
                  <button onClick={this.toggleSize}  className='sizeButton' value='S' key='S'>S</button >
                  <button onClick={this.toggleSize}  className='sizeButton' value='M' key='M'>M</button >
                  <button  onClick={this.toggleSize} className='sizeButton' value='L' key='L'>L</button >
                  <button  onClick={this.toggleSize} className='sizeButton' value='XL' key='XL'>XL</button >
                  <button  onClick={this.toggleSize} className='sizeButton' value='XXL' key='XXL'>XXL</button >
              </div>
              <div className='q_c'>
                <button className="qsButtonLeft" onClick={(event) => {
                  this.quantityDecrease(event);
                }} ><i className="fa fa-minus" aria-hidden="true"></i></button>
                <div className='quantityBox'>{this.state.quantity}</div>
                <button className="qsButtonRight" onClick={this.quantityIncrease}><i className="fa fa-plus" aria-hidden="true"></i></button>
              </div>
          </div>
        </div>
        {description}

      </div>
    )
  }
}

export default Product_Detail