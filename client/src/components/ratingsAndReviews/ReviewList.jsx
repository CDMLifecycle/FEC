import React from 'react';
import WriteReview from './WriteReview.jsx';
import Sort from './Sort.jsx';
import ReviewTile from './ReviewTile.jsx';

class ReviewList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render () {
    return (
      <div>
        <h3>Reviews List</h3>
        <Sort />
        <ReviewTile />
        <button>Show More Reviews</button>
        <button>Write a Review</button>
        <WriteReview />
      </div>
    )
  }
}

export default ReviewList;