import React from 'react';

class WriteReview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product_id: '',
      rating: '',
      summary: '',
      body: '',
      recommend: '',
      name: '',
      email: '',
      photos: [],
      characteristics: {}
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  componentDidMount() {
    this.setState({
      product_id: 5
    })
  }

  render () {
    return (
      <div>
        <h5>Write a new Review</h5>
        <form onSubmit={this.handleSubmit}>
          <input></input>
          <input></input>
          <input></input>
          <input></input>
          <input></input>
          <input></input>
          <input></input>
          <button>Submit</button>
        </form>

      </div>
    )
  }
}

export default WriteReview;