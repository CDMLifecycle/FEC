import React from 'react';
import Stars from './Stars.jsx';
import { throttle } from 'lodash';



class ReviewTile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
    this.handleHelpful = this.handleHelpful.bind(this);
    this.handleReport = this.handleReport.bind(this);
  }

  handleReport(e){
    e.preventDefault();
    this.props.sendReport(e.target.value)
  }

  handleHelpful(e){
    e.preventDefault();
    this.props.sendHelpful(e.target.value)
  }

  render () {
    if (!this.props.productMetadata.totals) {
      return null
    } else {

      let review = this.props.review;
      console.log(this.props)
      return (
        <div className='review-tile-container'>
          <div className='review-tile' style={reviewTileStyle}>
            <Stars avgQtr={review.rating}/>
            <h5>{review.summary}</h5>
            <h6>{review.body}</h6>
            <h6>{review.date}</h6>
            <h6>{review.reviewer_name}</h6>
            <div>
              <button
                onClick={this.handleReport}
                value={review.review_id}
                className="btn-review-tile"
                >report</button>
              <button
                onClick={this.handleHelpful}
                value={review.review_id}
                className="btn-review-tile"
                >mark helpful</button>
            </div>
            <h6></h6>
            <h6>{review.helpfulness}</h6>
            {/* <img>If images</img> */}
            <h1>_______________________________</h1>
          </div>
        </div>
      )}
  }
}


const reviewTileStyle = {
  backgroundColor: 'yellow'
}

export default ReviewTile;