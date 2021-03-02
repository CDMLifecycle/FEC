import React from 'react';
import RatingBreakdown from './RatingBreakdown.jsx';
import ReviewList from './ReviewList.jsx';

class RatingsAndReviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      averageRating: ''
      // filter parameters
      // meta data

    };
  }

  componentDidMount() {
    // axios request for meta data
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
          reviewsList={this.props.reviewsList}
          productID={this.props.productID}
          getReviews={this.props.getReviews}
        />
      </div>
    </div>
    );

  }
}

export default RatingsAndReviews;