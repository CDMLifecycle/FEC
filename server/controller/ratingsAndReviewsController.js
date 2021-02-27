const axios = require('axios');
const auth_token = require('../../authorization.config.js').token;

var options = {
  headers: {
    'Authorization': auth_token
  }
}

// fix url
var url = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/{FIX ME}';


const ratingsAndReviewsController = {

//axios requests

};

module.exports.ratingsAndReviewsController = ratingsAndReviewsController;