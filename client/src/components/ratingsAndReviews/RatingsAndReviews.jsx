import React from 'react';
import RatingBreakdown from './RatingBreakdown.jsx';
import ReviewList from './ReviewList.jsx';

class RatingsAndReviews extends React.Component {
  constructor({ productID }) {
    super({ productID })
    this.state = {
      toRender: false,
      currentProductID: ''
    };
  }


  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     currentProductID:
  //   };
  // }

  render () {

    return (
      <div>
        <h3>Ratings and Reviews</h3>
        <div>
          <RatingBreakdown />
        </div>
        <div>
          <ReviewList />
        </div>
      </div>
    )
  }
}

export default RatingsAndReviews;