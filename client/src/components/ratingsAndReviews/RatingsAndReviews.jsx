import React from 'react';
import axios from 'axios';
import RatingBreakdown from './RatingBreakdown.jsx';
import ReviewList from './ReviewList.jsx';

class RatingsAndReviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      averageRating: '',
      filterSelections: [],
      filteredList: [],
      filterFlag: false
    };
    this.updateFilter = this.updateFilter.bind(this);
    this.filterArray = this.filterArray.bind(this);
  }


  componentDidMount() {
    this.setState({
      filteredList: this.props.reviewsList
    })
  }

  updateFilter(states) {
    let update = [];
    for (let num in states) {
      if (states[num]) {
        update.push(Number(num))
      }
    }
    if (update.length) {
      this.setState({ filterSelections: update }, () => {
        this.filterArray(this.props.reviewsList, this.state.filterSelections)
      })
    } else {
      this.setState({
        filterFlag: false,
        filteredList: this.props.reviewsList
       })
    }

  }

  filterArray(array, ratingFilter) {
    let filtered = [];
    array.forEach( reviewObj => {
      if (ratingFilter.includes(reviewObj.rating)) {
        filtered.push(reviewObj)
      }
    });
    this.setState({
      filterListed: filtered
    });
  }

  render () {
    let meta = this.props.productMetadata;
    return (
      <div>
      <h3>Ratings and Reviews</h3>
      <div>
        <RatingBreakdown
          productMetadata={meta}
          updateFilter={this.updateFilter}
        />
      </div>
      <div>
        <ReviewList
          reviewsList={this.state.filteredList}
          productID={this.props.productID}
          getReviews={this.props.getReviews}
          productMetadata={meta}
          filterSelections={this.state.filterSelections}
        />
      </div>
    </div>
    );

  }
}

export default RatingsAndReviews;