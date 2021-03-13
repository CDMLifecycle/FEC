import React from 'react';
import axios from 'axios';
import WriteReview from './WriteReview.jsx';
import ReviewTile from './ReviewTile.jsx';
import './reviewList.css';

class ReviewList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      writeBtn: false,
      reviewPosted: false,
      sort: 'relevant',
      count: 2,
      page: 1,
      postedReview: false
    };
    this.handleSelectChange = this.handleSelectChange.bind(this);
    this.handleShowMoreReviews = this.handleShowMoreReviews.bind(this);
    this.handleWriteReviewBtn = this.handleWriteReviewBtn.bind(this);
    this.submitWriteReview = this.submitWriteReview.bind(this);
    this.sendHelpful = this.sendHelpful.bind(this);
    this.sendReport = this.sendReport.bind(this);
    this.assignSortClass = this.assignSortClass.bind(this);
    this.exitWriteReview = this.exitWriteReview.bind(this);
    this.showMoreReviewsButton = this.showMoreReviewsButton.bind(this);
    this.showWriteReviewButton = this.showWriteReviewButton.bind(this);
  }

  handleSelectChange(e) {
    let currentSelect = e.target.value;
    if (currentSelect !== this.state.sort) {
      this.props.getReviews(this.props.productMetadata.product_id, currentSelect, this.state.count)
        .then(this.setState({ sort: currentSelect }))
    }
  }

  handleShowMoreReviews(e) {
    e.preventDefault();
    this.setState({ count: this.state.count += 2 }, () => {
      this.props.getReviews(this.props.productMetadata.product_id, this.state.sort, this.state.count)
    })
  }

  handleWriteReviewBtn(e) {
    e.preventDefault();
    return !this.state.writeBtn ? this.setState({ writeBtn: true }) : null;
  }

  exitWriteReview(e) {
    if (e.target.getAttribute('name') === 'backdrop' || e.target.getAttribute('name') === 'exit') {
      this.setState({ writeBtn: false })
    }
  }

  submitWriteReview(postParams) {
    axios.post('/reviews/add', postParams)
      .then(response => {
        this.setState({ reviewPosted: true, writeBtn: false, count: this.state.count++ })
      })
      .then(() => this.props.getReviews(this.props.productMetadata.product_id, this.state.sort, this.state.count))
      .catch(err => {
        console.log('did not post review');
        alert('did not post');
      })
  }

  sendReport(review_id) {
    axios.put('/reviews/report', { data: review_id })
     .then(res => console.log('success on report'))
     .then(() => this.props.getReviews(this.props.productMetadata.product_id, this.state.sort, this.state.count))
     .then(() => this.setState({ postedReview: true }))
     .catch(err => console.log('error with reporting review'))
  }

  sendHelpful(review_id) {
    axios.put('/reviews/helpful', { data: review_id })
      .then(res => console.log('success on helpful report'))
      .then(() => this.props.getReviews(this.props.productMetadata.product_id, this.state.sort, this.state.count))
      .catch(err => console.log(err, 'error with helpful review'))
 }

  assignSortClass(type) {
    return type === this.state.sort ? 'sort-selected' : 'plain-button';
  }

  showMoreReviewsButton(){
    return (
      <button onClick={this.handleShowMoreReviews} id='more-reviews-btn'>
        SHOW MORE REVIEWS
      </button>
    )
  }

  showWriteReviewButton(){
    return (
      <button onClick={this.handleWriteReviewBtn} id='write-review-btn'>
        WRITE A REVIEW +
      </button>
    )
  }

  noReviews() {
    return (
      <div className='no-tiles'>
        <h2>Be the first to review this product!</h2>
      </div>)
  }

  render () {
    let reviewArray = this.props.reviewsList;
    return (
      <div className='reviews-list-container'>
        <div onClick={this.handleSelectChange} className='sort-btn-container'>
            <button
              value='relevant'
              className={this.assignSortClass('relevant')}
            >Relevant</button>
            <button
              value='newest'
              className={this.assignSortClass('newest')}
            >Newest</button>
            <button
              value='helpful'
              className={this.assignSortClass('helpful')}
            >Helpful</button>
        </div>
        <div className='mapped-tiles-container'>
          {this.props.productMetadata.totals.totalRatings
            ? reviewArray.map((review, index) => (
                <ReviewTile
                  review={review}
                  key={review.review_id}
                  getReviews={this.props.getReviews}
                  getReviewsParams={this.state}
                  sendHelpful={this.sendHelpful}
                  sendReport={this.sendReport}
                  productMetadata={this.props.productMetadata}
                  key={index}
                />
               ))
            : this.noReviews()
          }
          <div className='btn-show-write-container'>
            <div id='rl-left-button'>
              {reviewArray.length >= this.state.count
                ? this.showMoreReviewsButton()
                : <button className='none' disabled></button>
              }
            </div>
            <div id='rl-right-button'>
              {!this.state.postedReview
                ? this.showWriteReviewButton()
                : <button className='none' disabled></button>
              }
            </div>
          </div>
        </div>
          {this.state.writeBtn
            ? <WriteReview
                submitWriteReview={this.submitWriteReview}
                productMetadata={this.props.productMetadata}
                className='write-review-modal'
                productInfo={this.props.productInfo}
                exit={this.exitWriteReview}
                reviewPosted={this.state.reviewPosted}
              />
            : <React.Fragment></React.Fragment>
          }
      </div>
    )
  }
}

export default ReviewList;