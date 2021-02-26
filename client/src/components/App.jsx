import React from 'react';
import axios from 'axios';
import ProductDetail from './Product_Detail.jsx';
import NavBar from './NavBar.jsx';
var stringSimilarity = require("string-similarity");


class App extends React.Component {
  constructor() {
    super();

    this.state = {
      productArr:  [],
      searchedQuery: '',
      productID: '',
      searchedArr: [],
    }
    this.handleSubmitForm = this.handleSubmitForm.bind(this);
    this.stringComparion = this.stringComparion.bind(this);
    // this.matchSearches = this.matchSearches.bind(this);
  }

  stringComparion() {
    var arr = [];
    for(var i = 0; i < this.state.productArr.length; i++) {
      var string1 = this.state.productArr[i].name;
      var string2 = this.state.searchedQuery;
      var similarity = stringSimilarity.compareTwoStrings(string1, string2);
      if (similarity > 0.3) {
        arr.push(this.state.productArr[i]);
      }
    }
    this.setState({searchedArr: arr});
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

  render() {
    return (
    <form onSubmit={this.handleSubmit}>
      <NavBar handleSubmitForm={this.handleSubmitForm}/>
      {/* addCode after this */}
      <ProductDetail searched={this.state.searchedQuery} searchedArr={this.state.searchedArr}/>
    </form>
    );
  }
}

export default App;