import React from 'react';
import axios from 'axios';
import {AppBar, Toolbar, Typography, IconButton} from '@material-ui/core';
import ProductDetail from './Product_Detail.jsx';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      productArr:  [],
      input: '',
      searched: '',
      productID: '',
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.matchSearches = this.matchSearches.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({searched: this.state.input, input: ''});
    // this.matchSearches();
  }
  handleChange(event) {
    this.setState({input: event.target.value});
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
      <AppBar position="static" elevation={0} >
        <Toolbar>
          <Typography type="title" color="inherit">
            CLMD ENTERPRISE
          </Typography>
          <input value={this.state.input} onChange={this.handleChange}></input>
          <IconButton type='submit' className='material-icons' onClick={this.handleSubmit}>
            <img src='https://image.winudf.com/v2/image1/c2Fuc3Vuc2VuMy5pbWFnZXNlYXJjaGVyX3NjcmVlbl83XzE1NDI5MDQ2MTNfMDUx/screen-7.jpg?fakeurl=1&type=.jpg' width="25" height="25"/>
          </IconButton>
          <div>
          </div>
        </Toolbar>
      </AppBar>
      {/* addCode after this */}
      <ProductDetail searched={this.state.searched}/>
    </form>
    );
  }
}

export default App;