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
      sort: 'relevant',
      count: 2,
      page: 1
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
  }

  handleSelectChange(e) {
    if (e.target.value !== this.state.sort) {
      this.setState(
        { sort: e.target.value },
        () => this.props.getReviews(this.props.productMetadata.product_id, this.state.sort, this.state.count)
      )
    }
  }

  handleShowMoreReviews(e) {
    e.preventDefault();
    this.setState({ count: this.state.count += 2 }, () => {
      this.props.getReviews(this.props.productMetadata.product_id, this.state.sort, this.state.count)
        .then(() => this.props.reRender())
    })
  }

  handleWriteReviewBtn(e) {
    e.preventDefault();
    if (!this.state.writeBtn) {
      this.setState({
        writeBtn: true
      })
    }
  }

  exitWriteReview(e) {
    e.preventDefault();
    this.setState({ writeBtn: false })
  }

  submitWriteReview(postParams) {
    axios.post('/reviews/add', postParams)
      .then(response => {
        console.log('successful post');
        this.setState({ writeBtn: false, count: this.state.count++ })
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
        Show More Reviews
      </button>
    )
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
          {reviewArray.map((review, index) => (
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
          ))}
          <div className='btn-show-write-container'>
          {reviewArray.length >= this.state.count ? this.showMoreReviewsButton() : <button id='none' disabled></button>}
            <button
              onClick={this.handleWriteReviewBtn}
              id='write-review-btn'
            >Write a Review+</button>
          </div>
        </div>
          {this.state.writeBtn
            ? <WriteReview
                submitWriteReview={this.submitWriteReview}
                productMetadata={this.props.productMetadata}
                className='write-review-modal'
                productInfo={this.props.productInfo}
                exit={this.exitWriteReview}
              />
            : <React.Fragment></React.Fragment>
          }
      </div>
    )
  }
}

export default ReviewList;