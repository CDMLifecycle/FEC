import React from 'react';
import SingleStar from './SingleStar.jsx';

class ReviewTile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}

  }


  // reportReview(e) {
  //   e.preventDefault();
  //   return new Promise((resolve, reject) => {
  //     axios.get('/reviews/report', {
  //       params: { productID }
  //     })
  //       .then(res => resolve(res))
  //       .catch(err => reject(console.log('error App.jsx - reportReview')))
  //   });
  // }


  // componentDidMount(){
  //   this.setState({
  //     productID: this.
  //   })
  // }

  render (){
    return (

      <div>
    <SingleStar />
    <h5>Review Tile</h5>
    <button>report</button>
    <button>mark helpful</button>
  </div>
  )}

}

export default ReviewTile;