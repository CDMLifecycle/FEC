import React from 'react';
import axios from 'axios';
import RatingBreakdown from './RatingBreakdown.jsx';
import ReviewList from './ReviewList.jsx';

class RatingsAndReviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      averageRating: '',
      filterSelections: []

      // filter parameters
      // meta data
    };
  }





  render () {
    return (
      <div>
      <h3>Ratings and Reviews</h3>
      <div>
        <RatingBreakdown
          productMetadata={this.props.productMetadata}
        />
      </div>
      <div>
        <ReviewList
          reviewsList={this.props.reviewsList}
          productID={this.props.productID}
          getReviews={this.props.getReviews}
          productMetadata={this.props.productMetadata}
        />
      </div>
    </div>
    );

  }
}

export default RatingsAndReviews;