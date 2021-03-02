import React from 'react';
import axios from 'axios';
import WriteReview from './WriteReview.jsx';
import Sort from './Sort.jsx';
import ReviewTile from './ReviewTile.jsx';

class ReviewList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviewsList: []
    };
  }

  render () {
    return (
      <div>
        <h3>Reviews List</h3>
        <h1>{this.props.productID}</h1>
        <Sort />
        <ReviewTile reportReview={this.props.reportReview}/>
        <button>Show More Reviews</button>
        <button>Write a Review</button>
        <WriteReview />
      </div>
    )
  }
}

export default ReviewList;