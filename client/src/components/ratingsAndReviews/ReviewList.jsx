import React from 'react';
import axios from 'axios';
import WriteReview from './WriteReview.jsx';
import ReviewTile from './ReviewTile.jsx';

class ReviewList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      writeBtn: false,
      sort: 'relevant',
      count: 2,
      page: 1
    };
    this.handleSelectChange = this.handleSelectChange.bind(this);
    this.handleShowMoreReviews = this.handleShowMoreReviews.bind(this);
    this.handleWriteReviewBtn = this.handleWriteReviewBtn.bind(this);
    this.submitWriteReview = this.submitWriteReview.bind(this);
  }

  handleSelectChange(e) {
    if (e.target.value !== this.state.sort) {
      this.setState(
        { sort: e.target.value },
        () => this.props.getReviews(this.props.productID, this.state.sort, this.state.count)
      )
    }
  }

  handleShowMoreReviews(e) {
    e.preventDefault();
    this.setState({ count: this.state.count += 2 },
    () => this.props.getReviews(this.props.productID, this.state.sort, this.state.count)
    )
  }

  handleWriteReviewBtn(e) {
    e.preventDefault();
    if (!this.state.writeBtn) {
      this.setState({
        writeBtn: true
      })
    }
  }

  submitWriteReview(postParams) {
    console.log(postParams)
    axios.post('/reviews/add', postParams)
      .then(response => {
        console.log('successful post');
        this.setState({ writeBtn: false })
      })
      .catch(err => {
        console.log('did not post review');
        alert('did not post');
      })
  }

  render () {
    let reviewArray = this.props.reviewsList;

    return (
      <div>
        <h2>Reviews List</h2>
        <div className='sort-container'>
          <form>
            <select value={this.state.sort} onChange={this.handleSelectChange}>
              <option value='relevant'>Relevant</option>
              <option value='newest'>Newest</option>
              <option value='helpful'>Helpful</option>
            </select>
          </form>
        </div>
        <h1>{this.props.productID}</h1>
        {reviewArray.map(review => (
          <ReviewTile
            review={review}
            key={review.review_id}
          />))
        }
        <button onClick={this.handleShowMoreReviews}>Show More Reviews</button>
        <button onClick={this.handleWriteReviewBtn}>Write a Review</button>
        {this.state.writeBtn
          ? <WriteReview
              submitWriteReview={this.submitWriteReview}
              productID={this.props.productID}
            />
          : <React.Fragment></React.Fragment>
        }
      </div>
    )
  }
}

export default ReviewList;