const router = require('express').Router();
const rrController = require('../controller/ratingsAndReviewsController').ratingsAndReviewsController;



// Handle Reviews Routes __________________________

// GET list of reviews with defined params_________
router.get('/', (req, res, next) => {
  rrController.getProductReviews(req.query)
    .then(response => res.send(response))
    .catch(err => res.sendStatus(404))
});

// POST review _____________________________________
router.post('/add', (req, res, next) => {

});

// PUT - Mark Helpful ______________________________
router.put('/helpful', (req, res, next) => {
  let review_id = req.query.reviewID;

  rrController.markHelpful(review_id)
    .then(response => res.sendStatus(204))
    .catch(err => res.send(404))
});

// PUT - Report______________________________________
router.put('/report', (req, res, next) => {
  let review_id = req.query.reviewID;

  rrController.reportReview(review_id)
    .then(response => res.sendStatus(204))
    .catch(err => res.send(404))

});

module.exports.ratingsAndReviewsRoutes = router;
