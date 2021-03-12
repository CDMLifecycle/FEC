import React from 'react';
import FECIcon from '../../dist/images/logo.png';
import './Header.css';

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      input: null,
      searched: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(event) {
    this.setState({
      input: event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.state.input) {
      this.props.handleSubmitForm(this.state.input);
    this.setState({searched: this.state.input, input: ''});
    }
  }

  handleClick(event) {
    event.preventDefault();
    let home = window.location.origin;
    window.location.href = home;
  }

  render() {
    return (
      <div className='Header'>
        <img className='Header-logo' onClick={this.handleClick} src={FECIcon}></img>
        <span></span>
        <div className='Header-search'>
          <input placeholder=' Search' onChange={this.handleChange}/>
          <div className='input-container'>
            <span onClick={this.handleSubmit} className="material-icons">search</span>
          </div>
        </div>
      </div>
    )
  }
}

export default Header;