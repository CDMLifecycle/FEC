import React from 'react';

class WriteReview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product_id: '',
      date: '',
      rating: '',
      summary: '',
      body: '',
      recommend: null,
      name: '',
      email: '',
      photos: [],
      fit: '',
      length: '',
      comfort: '',
      quality: '',
      postParams: {}
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleBoolean = this.handleBoolean.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({
      date: new Date(),
      postParams: {
        product_id: this.state.product_id,
        rating: Number(this.state.rating),
        summary: this.state.summary,
        body: this.state.body,
        recommend: this.state.recommend,
        name: this.state.name,
        email: this.state.email,
        photos: [],
        characteristics: {
          // Fit: {
          //   characteristic_id: '',
          //   value: this.state.fit
          // },
          // Length: {
          //   characteristic_id: '',
          //   value: this.state.length
          // },
          // Quality: {
          //   characteristic_id: '',
          //   value: this.state.quality
          // },
          // Comfort: {
          //   characteristic_id: '',
          //   value: this.state.comfort
          // },
          // Size: {
          //   characteristic_id: '',
          //   value: null
          // },
          // Width: {
          //   characteristic_id: '',
          //   value: null
          // }
          50013: Number(this.state.fit),
          50014: Number(this.state.length),
          50015: Number(this.state.quality),
          50016: Number(this.state.comfort)
        }
      }
    },
      () => {
        this.props.submitWriteReview(this.state.postParams)
      }
    )
  }

  handleBoolean(e) {
    e.target.value === 'true'
    ? this.setState({ recommend: true })
    : this.setState({ recommend: false });
  }

  componentDidMount() {
    this.setState({
      product_id: this.props.productID
    })
  }

  render () {
    return (
      <div style={{backgroundColor: 'coral'}}>
        <h2>______________________________________________________</h2>
        <h3>Write a new Review for product#{this.state.product_id}</h3>
        <form onSubmit={this.handleSubmit}>
          <label onChange={this.handleChange} value={this.state.rating}>
            <input type='radio' value='1' name='rating' required/>1
            <input type='radio' value='2' name='rating'/>2
            <input type='radio' value='3' name='rating'/>3
            <input type='radio' value='4' name='rating'/>4
            <input type='radio' value='5' name='rating'/>5
          </label>
          <div>
            <input
              placeholder='Please give a breif summary of your review'
              name='summary'
              value={this.state.summary}
              onChange={this.handleChange}
            />
            <input
              placeholder='1000 character max'
              name='body'
              value={this.state.body}
              onChange={this.handleChange}
              required
            />
          </div>
          <input
            placeholder='Name'
            name='name'
            value={this.state.name}
            onChange={this.handleChange}
            required
          />
          <input
            placeholder='Email'
            name='email'
            value={this.state.email}
            onChange={this.handleChange}
            required
          />
          <label onChange={this.handleBoolean} value={this.state.recommend}>
            <h6>Would you recommend this item?</h6>
            <input type='radio' name='recommend' value='true' required />Yes
            <input type='radio' name='recommend' value='false' />No
          </label>
          <div className='characteristics-container'>
            <span style={{padding: '3px'}}>Characteristics</span>
            <div>
              <label onChange={this.handleChange} value={this.state.rating}>
                Fit
                <input type='radio' value='1' name='fit' required/>1
                <input type='radio' value='2' name='fit'/>2
                <input type='radio' value='3' name='fit'/>3
                <input type='radio' value='4' name='fit'/>4
                <input type='radio' value='5' name='fit'/>5
              </label>
            </div>
            <div>
              <label onChange={this.handleChange} value={this.state.rating}>
                Length
                <input type='radio' value='1' name='length' required/>1
                <input type='radio' value='2' name='length'/>2
                <input type='radio' value='3' name='length'/>3
                <input type='radio' value='4' name='length'/>4
                <input type='radio' value='5' name='length'/>5
              </label>
            </div>
            <div>
              <label onChange={this.handleChange} value={this.state.rating}>
                Comfort
                <input type='radio' value='1' name='comfort' required/>1
                <input type='radio' value='2' name='comfort'/>2
                <input type='radio' value='3' name='comfort'/>3
                <input type='radio' value='4' name='comfort'/>4
                <input type='radio' value='5' name='comfort'/>5
              </label>
            </div>
            <div>
              <label onChange={this.handleChange} value={this.state.rating}>
                Quality
                <input type='radio' value='1' name='quality' required/>1
                <input type='radio' value='2' name='quality'/>2
                <input type='radio' value='3' name='quality'/>3
                <input type='radio' value='4' name='quality'/>4
                <input type='radio' value='5' name='quality'/>5
              </label>
            </div>
          </div>
          <button>Submit</button>
        </form>

      </div>
    )
  }
}

export default WriteReview;