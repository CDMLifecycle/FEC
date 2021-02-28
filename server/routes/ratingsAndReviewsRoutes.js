const router = require('express').Router();
const ratingsAndReviewsController = require('../controller/ratingsAndReviewsController').ratingsAndReviewsController;

const URL = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo';


//reviews
var getReviews = `${URL}/reviews`;
var postReviews = `${URL}/reviews`;
var reviewMeta = `${URL}/reviews/meta`;
var putReviews = `${URL}/reviews/:reviews_id/helpful`;
var putReport =  `${URL}/reviews/:review_id/report`;

// handle routes

module.exports.ratingsAndReviewsRoutes = router;
