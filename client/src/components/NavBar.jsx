  import React from 'react';
  import {AppBar, Toolbar, Typography, IconButton} from '@material-ui/core';

  class NavBar extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        input: '',
        searched: '',
      }
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
      this.setState({input: event.target.value});
    }
    handleSubmit(event) {
      event.preventDefault();
      this.props.handleSubmitForm(this.state.input);
      this.setState({searched: this.state.input, input: ''});
      // this.matchSearches();
    }

    render() {
      return (
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
        )
    }
  }

  export default NavBar;