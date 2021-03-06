import React from 'react';
import axios from 'axios';
import ProductDetail from './Product_rendering/Product_Detail.jsx';
import NavBar from './NavBar.jsx';
import RelatedItems from './relatedProducts/RelatedItems.jsx';
import QAMain from './qa/QAMain.jsx';
import RatingsAndReviews from './ratingsAndReviews/RatingsAndReviews.jsx';
import Landing from './Landing.jsx';
import Looks from './relatedProducts/Looks.jsx';
import dummyData from './relatedProducts/dummydata.js';
var stringSimilarity = require("string-similarity");


class App extends React.Component {
  constructor() {
    super();

    this.state = {
      productArr:  [],
      productMetadata: {},
      searchedQuery: '',
      productID: '',
      searchedArr: [],
      reviewsList: [],
      paths: '/',
      currentProductInformation: null
    }
    this.handleSubmitForm = this.handleSubmitForm.bind(this);
    this.switchStatement = this.switchStatement.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.stringComparison = this.stringComparison.bind(this);
    this.getReviews = this.getReviews.bind(this);
    this.getMetadata = this.getMetadata.bind(this);
    // this.matchSearches = this.matchSearches.bind(this);
    this.updateCurrentProductInformation = this.updateCurrentProductInformation.bind(this);
  }

  stringComparison() {
    var arr = [];
    for(var i = 0; i < this.state.productArr.length; i++) {
      var string1 = this.state.productArr[i].name;
      var string2 = this.state.searchedQuery;
      // var similarity = stringSimilarity.compareTwoStrings(string1, string2);
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
      this.getReviews(productID)
        .then(res => {
          this.setState({
            searchedArr: arr,
            productID: productID
          })
        });
    }
  }

  getReviews(product_id, sort = 'relevant', count = 2, page = 1) {
    return new Promise((resolve, reject) => {
      axios.get('/reviews', { params: { product_id, sort, count, page } })
        .then(res => resolve(this.setState({ reviewsList: res.data.results })))
        .then(() => this.getMetadata(product_id))
        .catch(err => reject(console.log('error App.jsx - getReviews')))
    });
  }

  getMetadata(product_id) {
    return new Promise((resolve, reject) => {
      axios.get('/reviews/meta', { params: { product_id } })
      .then(res => resolve(this.setState({ productMetadata: res.data })))
      .catch(err => reject(console.log('error App.jsx - getMetadata')))
    })
  }

  handleSubmitForm(searched) {
    // this.setState({searchedQuery: searched}, () => this.stringComparison());
    this.setState({searchedQuery: 'camo'}, () => this.stringComparison());
  }

  componentDidMount() {
    axios.get('/products')
    .then((res) => {
      this.setState({productArr: res.data});
    })
    .catch((error) => {
      console.log(error);
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    if(this.state.paths !== '/final') {
      this.setState({paths: '/final'});
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


  switchStatement() {
    switch(this.state.paths) {
      case "/":
        return (
          <Landing handleSubmitForm={this.handleSubmitForm} handleSubmit={this.handleSubmit}/>
        )
      case "/final":
        return (
          <div>
            <form onSubmit={this.handleSubmit}>
              <NavBar handleSubmitForm={this.handleSubmitForm}/>
            </form>
            <ProductDetail productID={this.state.productID} searched={this.state.searchedQuery} searchedArr={this.state.searchedArr} Metadata={this.state.productMetadata}/>
            <RelatedItems productId={14042} currentProductInformation={this.state.currentProductInformation} />
            <Looks products={[dummyData.formattedDefaultProduct]} currentProductId={14807} setCurrentProduct={this.updateCurrentProductInformation}/>
            {this.state.productID ?
            <QAMain productID={this.state.productID} /> : null}
            {this.state.productID
              ? <RatingsAndReviews
                productID={this.state.productID}
                reviewsList={this.state.reviewsList}
                getReviews={this.getReviews}
                productMetadata={this.state.productMetadata}
                />
              : <div></div>}
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


