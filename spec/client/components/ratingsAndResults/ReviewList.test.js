import React from 'react';
import {mount, shallow} from 'enzyme';
import ReviewList from '../../../../client/src/components/ratingsAndReviews/ReviewList.jsx';
import ReviewTile from '../../../../client/src/components/ratingsAndReviews/ReviewTile.jsx';

describe('Reviews List testing', () => {


  it('It should not render reviews list without reviews list', () => {

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

  const dummyMetaDataNull = {
    characteristics: {
      Comfort: {id: 47021, value: null},
      Fit: {id: 47019, value: null},
      Length: {id: 47020, value: null},
      Quality: {id: 47022, value: null}
    },
    product_id: "14034",
    ratings: {
      0: null,
      1: null,
      2: null,
      3: null,
      4: null,
      5: null
    },
    recommended: {
      false: null,
      true: null
    },
    totals: {
      avgRating: null,
      avgRatingsToQtr: null,
      percentRecommend: null,
      ratingsPercent: {1: null, 2: null, 3: null, 4: null, 5: null},
      sumRecommendations: 41,
      totalRatings: null
    }
  }


    var wrapper = shallow(
      <ReviewList
        reviewsList={{}}
        // getReviews={this.getReviews}
        // productMetadata={this.props.productMetadata}
        // filterSelections={this.state.filterSelections}
        // reRender={this.reRender}
        // productInfo={this.props.productInfo}
      />);

    expect(wrapper.find(<h2>Be the first to review this product!</h2>)).toBe(true);
  })

})