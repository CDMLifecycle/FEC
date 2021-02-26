import React from 'react';
import axios from 'axios';
import ProductDetail from './Product_Detail.jsx';
import NavBar from './NavBar.jsx';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      productArr:  [],
      searchedQuery: '',
      productID: '',
    }
    this.handleSubmitForm = this.handleSubmitForm.bind(this);
    // this.matchSearches = this.matchSearches.bind(this);
  }

  handleSubmitForm(searched) {
    this.setState({searchedQuery: searched});
    // this.matchSearches();
  }


  componentDidMount() {
    axios.get('/products')
    .then((res) => {
      console.log(res.data);
      this.setState({productArr: res.data});
    })
    .catch((error) => {
      console.log(error);
    })
  }
  // matchSearches() {
  //   console.log(this.state.productArr);
  //   var regex = `/${this.state.searched}/gi`
  //   for(var i = 0; i < this.state.productArr.length; i++) {
  //     var matches = this.state.productArr[i].name.match(regex);
  //     console.log(matches);
  //   }
  // }

  render() {
    return (
    <form onSubmit={this.handleSubmit}>
      <NavBar handleSubmitForm={this.handleSubmitForm}/>
      {/* addCode after this */}
      <ProductDetail searched={this.state.searched}/>
    </form>
    );
  }
}

export default App;