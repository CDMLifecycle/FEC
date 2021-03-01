import React from 'react';
import axios from 'axios';
import ProductDetail from './Product_rendering/Product_Detail.jsx';
import NavBar from './NavBar.jsx';
import RelatedItems from './relatedProducts/RelatedItems.jsx';
import RatingsAndReviews from './ratingsAndReviews/RatingsAndReviews.jsx';
import Landing from './Landing.jsx';
var stringSimilarity = require("string-similarity");

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      productArr:  [],
      searchedQuery: '',
      productID: '',
      searchedArr: [],
      paths: '/'
    }
    this.handleSubmitForm = this.handleSubmitForm.bind(this);
    this.stringComparion = this.stringComparion.bind(this);
    this.switchStatement = this.switchStatement.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.matchSearches = this.matchSearches.bind(this);
  }

  stringComparion() {
    var arr = [];
    for(var i = 0; i < this.state.productArr.length; i++) {
      var string1 = this.state.productArr[i].name;
      var string2 = this.state.searchedQuery;
      var similarity = stringSimilarity.compareTwoStrings(string1, string2);
      if (similarity > 0.15) {
        arr.push(this.state.productArr[i]);
      }
    }
    if(arr[0]){
      this.setState({searchedArr: arr, productID: arr[0].id});
    }
  }
  handleSubmitForm(searched) {
    this.setState({searchedQuery: searched}, () => this.stringComparion());
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
              <NavBar handleSubmitForm={this.handleSubmitForm} handleSubmit={this.handleSubmit}/>
            </form>
            <ProductDetail productID={this.state.productID} searched={this.state.searchedQuery} searchedArr={this.state.searchedArr}/>
            <RelatedItems />
            <RatingsAndReviews productID={this.state.productID}/>
          </div>
        )
      }
  }

  render() {
    return (
      <div>
        {this.switchStatement()}
      </div>
    )
  }
}

export default App;


