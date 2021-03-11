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
      reviewsList: [],
      product_id: '',
      filterSelections: [],
      filteredList: [],
      filterFlag: false
    };
    this.updateFilter = this.updateFilter.bind(this);
    this.filterArray = this.filterArray.bind(this);
    this.reRender = this.reRender.bind(this);
    this.getReviews = this.getReviews.bind(this);
  }


  componentDidMount() {
    this.getReviews(this.props.productMetadata.product_id)
      .then(() => this.setState({ product_id: this.props.productMetadata.product_id }))
      .catch(() => console.log('Error in component mount'))
    }

  getReviews(product_id, sort = 'relevant', count = 2, page = 1) {
      return new Promise((resolve, reject) => {
        axios.get('/reviews', { params: { product_id, sort, count, page } })
          .then(res => resolve( this.setState({ reviewsList: res.data.results }) ))
          .then(() => this.reRender())
          .catch(err => reject(console.log('error ratingsAndReiews.jsx - getReviews')))
      });
    }


  reRender(){
    if (this.state.filterSelections.length) {
      this.filterArray(this.state.reviewsList, this.state.filterSelections);
    } else {
      this.setState({ filteredList: this.state.reviewsList })
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
      this.filterArray(this.state.reviewsList, update)
    } else {
      this.setState({
        filterFlag: false,
        filteredList: this.state.reviewsList,
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
    return (
      <div id='ratings-reviews-main-container'>
        <div id='ratings-reviews-header'>
          <h3>Ratings & Reviews</h3>
        </div>
        <div id='breakdown-reviewlist-content'>
          <div id='rating-breakdown-container'>
            <RatingBreakdown
              productMetadata={this.props.productMetadata}
              updateFilter={this.updateFilter}
            />
          </div>
          <div id='review-list-container'>
            <ReviewList
              reviewsList={this.state.filteredList}
              // productID={this.props.productID}
              getReviews={this.getReviews}
              productMetadata={this.props.productMetadata}
              filterSelections={this.state.filterSelections}
              reRender={this.reRender}
              productInfo={this.props.productInfo}
            />
            </div>
          </div>
      </div>
    );

  }
}

export default RatingsAndReviews;