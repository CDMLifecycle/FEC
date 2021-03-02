import React from 'react';
import RatingBreakdown from './RatingBreakdown.jsx';
import ReviewList from './ReviewList.jsx';

class RatingsAndReviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };

  }

  render () {
    return (
      <div>
      <h3>Ratings and Reviews</h3>
      <div>
        <RatingBreakdown />
      </div>
      <div>
        <ReviewList
          productID={this.props.productID}
        />
      </div>
    </div>
    );

  }
}

export default RatingsAndReviews;