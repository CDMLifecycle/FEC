import React from 'react';
import Stars from './Stars.jsx';
import CheckMark from './svg/check-mark.svg';
import './reviewTile.css';

class ReviewTile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      putHelpful: false
    }
    this.handleHelpful = this.handleHelpful.bind(this);
    this.handleReport = this.handleReport.bind(this);
    this.ifRecommend = this.ifRecommend.bind(this);
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

  ifRecommend(review) {
    return review.recommend
      ? (<div className='rt-rec-img'>
          <img src={CheckMark} alt='check' />I recommend this product!
        </div>)
      : null;
  }

  render () {
    if (!this.props.productMetadata.totals) {
      return null
    } else {
      let review = this.props.review;
      console.log(review)
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
                <div className='rt-rec'>
                  {this.ifRecommend(review)}
                  <h6>-{review.reviewer_name}</h6>
                </div>
              {/* <div className='rt-response'>{'if response'}</div> */}
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