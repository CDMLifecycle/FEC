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
      searchedQuery: '',
      productID: '',
      searchedArr: [],
      reviewsList: [],
      paths: '/'
    }
    this.handleSubmitForm = this.handleSubmitForm.bind(this);
    this.switchStatement = this.switchStatement.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.stringComparison = this.stringComparison.bind(this);
    this.getReviews = this.getReviews.bind(this);
    // this.matchSearches = this.matchSearches.bind(this);
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
      this.getReviews(productID)
        .then(res => {
          this.setState({
            searchedArr: arr,
            productID: productID,
            reviewsList: res.data.results
          })
        });
    }
  }

  getReviews(product_id, sort = 'relevant', count = 5, page = 1) {
    return new Promise((resolve, reject) => {
      axios.get('/reviews', {
        params: { product_id, sort, count, page }
      })
        .then(res => resolve(res))
        .catch(err => reject(console.log('error App.jsx - getReviews')))
    });
  }

  handleSubmitForm(searched) {
    this.setState({searchedQuery: searched}, () => this.stringComparison());
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
            <ProductDetail productID={this.state.productID} searched={this.state.searchedQuery} searchedArr={this.state.searchedArr}/>
            <QAMain productID={this.state.productID} searched={this.state.searchedQuery} searchedArr={this.state.searchedArr}/>
            <RelatedItems productId={14042} />
            <Looks products={[dummyData.formattedDefaultProduct]} />
            {this.state.productID ? <RatingsAndReviews productID={this.state.productID}/> : <div></div>}
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


