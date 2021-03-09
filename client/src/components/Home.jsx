import React from 'react';
import Footer from './Footer.jsx';

class Home extends React.Component {
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
    this.props.handleSubmit(event);
  }

  render() {
    return (
      <div className='Home'>
        <form onSubmit={this.handleSubmit}>
          <div className='Home-form' >
            <input className='Home-searchbar' value={this.state.input} onChange={this.handleChange} placeholder=' Search for a product'></input>
          </div>
        </form>
        <Footer />
      </div>
    )
  }
}

export default Home;