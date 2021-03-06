const axios = require('axios');
const auth_token = require('../../authorization.config.js').token;
const calc = require('./calculator.js');


/* -------------------------------Helper Functions--------------------------*/

// var calculateAverageRating = (ratings) => {
//   let total = 0
//   let numOfRatings = 0;
//   for (let key in ratings) {
//     total+= parseInt(key) * parseInt(ratings[key]);
//     numOfRatings += parseInt(ratings[key]);
//   }
//   if (numOfRatings > 0) {
//     var average = total / numOfRatings
//     return Math.floor(average * 4) / 4;
//   } else {
//     return null;
//   }
// }


/* --------------------------------api options -------------------------------*/

var options = {
  headers: {
    'Authorization': auth_token
  }
}
var url = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/reviews';


/* ---------------------------------controller module ------------------------*/

var reviewController = {
  getProductReviews: (id, page, count, sort) => {
    return new Promise((resolve, reject) => {
      axios.get(url, options)
        .then(result => {
          resolve(result.data);
        })
        .catch(err => {
          reject(err);
        })
      });
  },
  getProductRatings: (id) => {
    return new Promise((resolve, reject) => {
      axios.get(url + `/meta/?product_id=${id}`, options)
        .then(result => {
          let numOfRatings = calc.numOfReviews(result);
          let averageScore = calc.averageRatingToQtr(result.data.ratings)
          resolve(averageScore);
        })
        .catch(err => {
          reject(err);
        })
      });
  }
}

module.exports.reviewController = reviewController;