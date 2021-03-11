import React from 'react';
import axios from 'axios';
import ProductDetail from './Product_rendering/Product_Detail.jsx';
import NavBar from './NavBar.jsx';
import RelatedItems from './relatedProducts/RelatedItems.jsx';
import QAMain from './qa/QAMain.jsx';
import RatingsAndReviews from './ratingsAndReviews/RatingsAndReviews.jsx';
import Landing from './Landing.jsx';
import Home from './Home.jsx';
import Looks from './relatedProducts/Looks.jsx';
import LoadingComponent from './relatedProducts/LoadingComponent.jsx';
import Footer from './Footer.jsx';
import Header from './Header.jsx';
import dummyData from './relatedProducts/dummydata.js';
import fetch from './relatedProducts/fetch.js';
import './color-schema.css';
import './app.css';
var stringSimilarity = require("string-similarity");
import StickyButton from './stickyButton.jsx';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      productArr:  [],
      productMetadata: {},
      searchedQuery: '',
      productID: null,
      searchedArr: [],
      // reviewsList: [],
      paths: '/product',
      currentProductInformation: null
    }
    this.handleSubmitForm = this.handleSubmitForm.bind(this);
    this.switchStatement = this.switchStatement.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.stringComparison = this.stringComparison.bind(this);
    // this.getReviews = this.getReviews.bind(this);
    this.getMetadata = this.getMetadata.bind(this);
    // this.matchSearches = this.matchSearches.bind(this);
    this.updateCurrentProductInformation = this.updateCurrentProductInformation.bind(this);
    this.updateLooksInSession = this.updateLooksInSession.bind(this);
    this.getLooksInSession = this.getLooksInSession.bind(this);
    this.updateProductOnClick = this.updateProductOnClick.bind(this);
  }

  componentDidMount() {
    const urlParams = new URLSearchParams(window.location.search);
    const idParam = urlParams.get('id');
    if (!idParam) {
      axios.get('/products')
      .then((res) => {
        this.setState({
          productArr: res.data,
          paths: '/'
        });
      })
      .catch((error) => {
        console.log(error);
      })
    } else {
      fetch.getProduct(idParam, (err, data) => {
        if (err) {
          window.location.href = 'http://localhost:3000';
        } else {
          this.getMetadata(data.data.id, data.data, data.data.id);
        }
      })
    }
  }




  stringComparison() {
    var arr = [];
    for(var i = 0; i < this.state.productArr.length; i++) {
      var string1 = this.state.productArr[i].name;
      var string2 = this.state.searchedQuery;
      var similarity = stringSimilarity.compareTwoStrings(string1, string2);
      if (similarity > 0.15) {
        arr.push(this.state.productArr[i]);
      }
    }
    // if(arr[0]){
    //   this.setState({searchedArr: arr, productID: arr[0].id});
    // }
    if(arr[0]){
      let productID = arr[0].id;
      // this.getReviews(productID)
      this.getMetadata(productID)
        .then(res => {
          this.setState({
            searchedArr: arr,
            productID: productID
          })
        });
    }
  }

  // getReviews(product_id, sort = 'relevant', count = 2, page = 1) {
  //   return new Promise((resolve, reject) => {
  //     axios.get('/reviews', { params: { product_id, sort, count, page } })
  //       .then(res => resolve(this.setState({ reviewsList: res.data.results })))
  //       .then(() => this.getMetadata(product_id))
  //       .catch(err => reject(console.log('error App.jsx - getReviews')))
  //   });
  // }

  getMetadata(product_id, searchedArr, productID) {
    return new Promise((resolve, reject) => {
      axios.get('/reviews/meta', { params: { product_id: parseInt(product_id) } })
      .then(res => {
        if (!searchedArr || !productID) {
          resolve(this.setState({ productMetadata: res.data }))
        } else {
          resolve(this.setState({
            productMetadata: res.data,
            searchedArr: [searchedArr],
            productID: productID,
            paths: '/product'
          }))
        }
      })
      .catch(err => reject(console.log('error App.jsx - getMetadata: ', err.message)))
    })
  }

  handleSubmitForm(searched) {
    this.setState({searchedQuery: searched}, () => this.stringComparison());
    // this.setState({searchedQuery: 'camo'}, () => this.stringComparison());
  }

  handleSubmit(event) {
    event.preventDefault();
    if(this.state.paths !== '/product') {
      this.setState({paths: '/product'});
    }
  }

  updateCurrentProductInformation(product) {
    event.preventDefault();
    if (typeof product === 'object' && product.campus) {
      this.setState({
        currentProductInformation: product
      })
    }
  }

  updateLooksInSession(product) {
    var looksArray = JSON.parse(window.sessionStorage.getItem('Looks'));
    if (looksArray && Array.isArray(looksArray)) {
      looksArray.push(product);
      window.sessionStorage.removeItem('Looks');
      window.sessionStorage.setItem('Looks', JSON.stringify(looksArray));
    } else {
      window.sessionStorage.setItem('Looks', JSON.stringify(product));
    }
  }

  getLooksInSession() {
    return JSON.parse(window.sessionStorage.getItem('Looks'))
  }


  updateProductOnClick(id, divRef) {
    if(!id) {
      this.setState({
        paths: '/'
      })
    } else {
      //window.location = 'http://' + window.location.host + '?id=' + id;
       fetch.getProduct(id, (err, data) => {
         if (err) {
           window.location.href = 'http://localhost:3000';
         } else {
          this.getMetadata(data.data.id, data.data, data.data.id);
        }
      })
    }
  }

  switchStatement() {
    switch(this.state.paths) {
      case "/":
        return (
          <Home handleSubmitForm={this.handleSubmitForm} handleSubmit={this.handleSubmit}/>
        )
      case "/product":
        return (
          <div className='backgroundcolor1 dark1'>
            <form onSubmit={this.handleSubmit}>
              <Header handleSubmitForm={this.handleSubmitForm}/>
            </form>
            <StickyButton />
            <ProductDetail productID={this.state.productID} searched={this.state.searchedQuery} searchedArr={this.state.searchedArr} Metadata={this.state.productMetadata}/>
            {this.state.productID && typeof this.state.productID === 'number' ?
            <RelatedItems
              productId={this.state.productID}
              currentProductInformation={this.state.currentProductInformation}
              updateProductOnClick={this.updateProductOnClick}
            /> : null}
            {this.state.productID && typeof this.state.productID === 'number' ?
            <Looks
              products={[dummyData.formattedDefaultProduct]}
              currentProductId={this.state.productID}
              setCurrentProduct={this.updateCurrentProductInformation}
              getLooksInSession={this.getLooksInSession}
              updateLooksInSession={this.updateLooksInSession}
            /> : null}
            {this.state.productID ?
            <QAMain productID={this.state.productID} searchedArr={this.state.searchedArr}/> : null}
            {this.state.productMetadata.product_id
              ? <RatingsAndReviews
                // product_id={this.state.productID}
                // reviewsList={this.state.reviewsList}
                // getReviews={this.getReviews}
                productMetadata={this.state.productMetadata}
                productInfo={this.state.searchedArr[0]}
                />
              : <div></div>}
              <Footer />
          </div>
        )
      }
  }

  render() {
    return (
      <div>
        {this.switchStatement()}
      </div>
    );
  }
}

export default App;


