import React from 'react';
import {mount, shallow} from 'enzyme';
import ReviewList from '../../../../client/src/components/ratingsAndReviews/ReviewList.jsx';
import ReviewTile from '../../../../client/src/components/ratingsAndReviews/ReviewTile.jsx';

describe('Reviews List testing', () => {


  test('It should not render reviews list without reviews list props', () => {

    let review = [{
      "review_id": 288008,
      "rating": 4,
      "summary": "Did component mount? ",
      "recommend": false,
      "response": null,
      "body": "body",
      "date": "2021-03-04T00:00:00.000Z",
      "reviewer_name": "Daniel Kosykh",
      "helpfulness": 43,
      "photos": []
  }];


    var wrapper = shallow(
      <ReviewList
      reviewsList={review}
      getReviews={this.getReviews}
      productMetadata={this.props.productMetadata}
      filterSelections={this.state.filterSelections}
      reRender={this.reRender}
      productInfo={this.props.productInfo}
    />);
    expect(wrapper.find(ReviewTile)).toHaveLength(1);
  })

})