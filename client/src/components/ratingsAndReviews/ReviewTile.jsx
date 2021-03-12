import React from 'react';
import Stars from './Stars.jsx';
import { throttle } from 'lodash';
import './reviewTile.css';

class ReviewTile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      putHelpful: false
    }
    this.handleHelpful = this.handleHelpful.bind(this);
    this.handleReport = this.handleReport.bind(this);
  }

  formatDate(date){
    let options = {year: 'numeric', month: 'long', day: 'numeric'};
    return new Date(date).toLocaleDateString(undefined, options);
  }

  handleReport(e){
    e.preventDefault();
    this.props.sendReport(e.target.value)
  }

  handleHelpful(e){
    e.preventDefault();
    if (!this.state.putHelpful) {
      this.props.sendHelpful(e.target.value);
      this.setState({ putHelpful: true });
    }
  }

  render () {
    console.log(this.props)
    if (!this.props.productMetadata.totals) {
      return null
    } else {
      let review = this.props.review;
      return (
        <div className='review-tile-container'>
          <div className='review-tile'>
            <div className='date-stars-container'>
              <Stars avgQtr={review.rating} size={25} />
              <h5>{this.formatDate(review.date)}</h5>
            </div>
              <div className='review-body'>
                <h4>{review.summary}</h4>
                <h5>{review.body}</h5>
                <h6>-{review.reviewer_name}</h6>
              <div className='rt-rec'>{'if recommended'}</div>
                {/* if verified  */}
              <div className='rt-response'>{'if response'}</div>
                {/* if verified  */}
              <div className='btn-box'>
                <div className='helpful'>
                  <button
                    onClick={this.handleHelpful}
                    value={review.review_id}
                    className="btn"
                    >Was this review helpful?</button>
                </div>
                <div>
                  <h6 className='yes'>Yes   ({review.helpfulness})</h6>
                </div>
                <button
                  onClick={this.handleReport}
                  value={review.review_id}
                  className="btn report"
                >Report</button>
              </div>
           </div>
          </div>
        </div>
      )}
  }
}



export default ReviewTile;