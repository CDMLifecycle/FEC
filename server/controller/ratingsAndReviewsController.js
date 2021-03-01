const axios = require('axios');
const auth_token = require('../../authorization.config.js').token;

var options = {
  headers: {
    'Authorization': auth_token
  }
}



const ratingsAndReviewsController = {

//axios requests

};

module.exports.ratingsAndReviewsController = ratingsAndReviewsController;