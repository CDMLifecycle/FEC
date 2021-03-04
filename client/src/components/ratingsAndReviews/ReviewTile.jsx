import React from 'react';
import SingleStar from './SingleStar.jsx';
import { throttle } from 'lodash';


class ReviewTile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
    this.handleHelpful = this.handleHelpful.bind(this);
    this.handleReport = this.handleReport.bind(this);
    // this.throttleHandleHelpful = this.throttleHandleHelpful.bind(this);
    // this.throttler = this.throttler.bind(throttler);
    //throttled
    // this.throttleHandleHelpful = throttle(e => this.handleHelpful(e), 1000)
    // this.handleReport =
  }

  handleReport(e){
    e.preventDefault();
    this.props.sendReport(e.target.value)
  }

  handleHelpful(e){
    e.preventDefault();
    console.log('this:', this)
    console.log('e: ', e)
    this.props.sendHelpful(e.target.value)
  }

  render (){
    let review = this.props.review;
    return (
      <div className='review-tile' style={reviewTileStyle}>
        <h1>_______________________________</h1>
        <SingleStar rating={review.rating}/>
        <h5>{review.summary}</h5>
        <h6>{review.body}</h6>
        <h6>{review.date}</h6>
        <h6>{review.reviewer_name}</h6>
        <div>
          <button
            onClick={this.handleReport}
            value={review.review_id}
          >report</button>
          <button
            onClick={this.handleHelpful}
            value={review.review_id}
          >mark helpful</button>
        </div>
        <h6>{review.helpful}</h6>
        <h6>{review.helpfulness}</h6>
        {/* <img>If images</img> */}
        <h1>_______________________________</h1>
      </div>
  )}
}


const reviewTileStyle = {
  backgroundColor: 'yellow'
}

export default ReviewTile;