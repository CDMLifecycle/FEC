const axios = require('axios');
const auth_token = require('../../authorization.config.js').token;
const calc = require('./calculator.js')

const URL = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo';
const reviewsURL = `${URL}/reviews`;
const metaReviewsURL = `${URL}/reviews/meta`;


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
      let queryParams = Object.assign({}, options);
      queryParams.params = params;
      axios.get(reviewsURL, queryParams)
        .then(res => resolve(res.data))
        .catch(err=> reject(err))
    })
  },

  // tested
  getMetaReviewData: params => {
    return new Promise((resolve, reject) => {
      let queryParams = Object.assign({}, options);
      queryParams.params =  params;
      axios.get(metaReviewsURL, queryParams)
        .then(res => resolve(Object.assign(res.data, calc.calcMeta(res.data))))
        .catch(err=> reject(err))
    })
  },

  // tested
  postReview: params => {
    return new Promise((resolve, reject) => {
        axios.post(reviewsURL, params, options)
          .then(res => resolve(console.log(res.data)))
          .catch(err=> reject(console.log(err)))
    })
  },

  // tested
  reportReview: review_id => {
    return new Promise((resolve, reject) => {
      axios.put(`${URL}/reviews/${review_id.data}/report`, review_id.data, options)
        .then(res => resolve(res))
        .catch(err => reject(err))
    })
  },

  // tested
  markHelpful: review_id => {
    return new Promise((resolve, reject) => {
      axios.put(`${URL}/reviews/${review_id.data}/helpful`, review_id.data, options)
        .then(res => resolve(console.log(res.data)))
        .catch(err => reject(console.log(err)))
    })
  }
};

module.exports.ratingsAndReviewsController = ratingsAndReviewsController;