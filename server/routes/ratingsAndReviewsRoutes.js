const router = require('express').Router();
const rrController = require('../controller/ratingsAndReviewsController').ratingsAndReviewsController;



// handle routes
router.get('/', (req, res, next) => {
  let productID = req.query.productID;
  let sort = req.query.sort;
  let count = req.query.count;
  let page = req.query.page;

  // need to update to handle other params

  rrController.getProductReviews(productID)
    .then(response => res.send(response))
    .catch(err => res.sendStatus(404))
});



router.post('/addreview', (req, res, next) => {

});

router.post('/helpfulreview', (req, res, next) => {

});

router.post('/reportreview', (req, res, next) => {

});

module.exports.ratingsAndReviewsRoutes = router;
