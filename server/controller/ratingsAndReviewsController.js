const axios = require('axios');
const auth_token = require('../../authorization.config.js').token;

const URL = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo';
const reviewsURL = `${URL}/reviews`;
const metaReviewsURL = `${URL}/reviews/meta`;
const reportReviewsURL = `${URL}/reviews/:review_id/report`;
const helpfulReviewsURL = `${URL}/reviews/:review_id/helpful`;

// Set Header_______________________________________________
const options = {
  headers: {
    'Authorization': auth_token
  }
}

// Set Controller for API Requests___________________________
const ratingsAndReviewsController = {

  // tested
  getProductReviews: params => {
    return new Promise((resolve, reject) => {
      let queryParams = options;
      queryParams.params = params;
      axios.get(reviewsURL, queryParams)
        .then(res => resolve(res.data))
        .catch(err=> reject(err))
    })
  },

  // tested
  getMetaReviewData: params => {
    return new Promise((resolve, reject) => {
      let queryParams = options;
      queryParams.params =  params;
      axios.get(metaReviewsURL, queryParams)
        .then(res => resolve(res.data))
        .catch(err=> reject(err))
    })
  },

  // untested
  postReview: params => {
    return new Promise((resolve, reject) => {

      // let queryParams = {
        //   headers: {
          //     Authorization: auth_token,
          //     'Content-Type': 'application/json'
          //   }
          // };


        axios.post(reviewsURL, params, options)
          .then(res => resolve(console.log(res.data)))
          .catch(err=> reject(console.log(err)))


      // queryParams.data = params;
      // axios.post(reviewsURL, queryParams)
      //   .then(res => resolve(console.log(res.data)))
      //   .catch(err=> reject(console.log(err)))
    })
  },

  // untested
  reportReview: review_id => {
    return new Promise((resolve, reject) => {
      let queryParams = options;
      queryParams.params = { review_id };

      axios.put(reportReviewsURL, queryParams)
        .then(res => resolve(res))
        .catch(err => reject(err))
    })
  },

  // untested
  markHelpful: review_id => {
    return new Promise((resolve, reject) => {
      let queryParams = options;
      queryParams.params = { review_id };

      axios.put(helpfulReviewsURL, queryParams)
        .then(res => resolve(res))
        .catch(err => reject(err))
    })
  }
};

module.exports.ratingsAndReviewsController = ratingsAndReviewsController;