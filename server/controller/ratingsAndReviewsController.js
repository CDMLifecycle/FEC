const axios = require('axios');
const auth_token = require('../../authorization.config.js').token;

var options = {
  headers: {
    'Authorization': auth_token
  }
}

const URL = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo';


//reviews
var getReviewsURL = `${URL}/reviews`;
var postReviews = `${URL}/reviews`;
var reviewMeta = `${URL}/reviews/meta`;
var putReviews = `${URL}/reviews/:reviews_id/helpful`;
var putReport =  `${URL}/reviews/:review_id/report`;



const ratingsAndReviewsController = {

  // need to update to handle other params
  getProductReviews: (productID) => {
    return new Promise((resolve, reject) => {
      axios.get(`${getReviewsURL}?product_id=${productID}`, options)
        .then(res => resolve(res.data))
        .catch(err=> reject(err))
    })
  }

};

module.exports.ratingsAndReviewsController = ratingsAndReviewsController;