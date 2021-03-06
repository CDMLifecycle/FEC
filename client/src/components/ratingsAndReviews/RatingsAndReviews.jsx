import React from 'react';
import axios from 'axios';
import RatingBreakdown from './RatingBreakdown.jsx';
import ReviewList from './ReviewList.jsx';
import './ratingsAndReviews.css';


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
    this.reRender = this.reRender.bind(this);
  }

  componentDidMount() {
    this.setState({ filteredList: this.props.reviewsList })
  }

  reRender(){
    if (this.state.filterSelections.length) {
      this.filterArray(this.props.reviewsList, this.state.filterSelections);
      this.setState({ filteredList: refilter });
    } else {
      this.setState({ filteredList: this.props.reviewsList })
    }
  }

  updateFilter(state) {
    let update = [];
    for (let num in state) {
      if (state[num]) {
        update.push(Number(num))
      }
    }
    if (update.length) {
      this.filterArray(this.props.reviewsList, update)
    } else {
      this.setState({
        filterFlag: false,
        filteredList: this.props.reviewsList,
        filterSelections: []
      });
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
      filteredList: filtered,
      filterSelections: ratingFilter
    });
  }

  render () {
    let meta = this.props.productMetadata;
    return (
      <div id='ratings-reviews-main-container'>
        <div id='ratings-reviews-header'>
          <h3>Ratings & Reviews</h3>
        </div>
        <div id='breakdown-reviewlist-content'>
          <div id='rating-breakdown-container'>
            <RatingBreakdown
              productMetadata={meta}
              updateFilter={this.updateFilter}
            />
          </div>
          <div id='review-list-container'>
            <ReviewList
              reviewsList={this.state.filteredList}
              productID={this.props.productID}
              getReviews={this.props.getReviews}
              productMetadata={meta}
              filterSelections={this.state.filterSelections}
              reRender={this.reRender}
            />
            </div>
          </div>
      </div>
    );

  }
}

export default RatingsAndReviews;