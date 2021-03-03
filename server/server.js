var express = require('express')
var productController = require('./controller/products').productController;
var reviewController = require('./controller/reviews').reviewController;
var relatedProductRoutes = require('./routes/relatedProducts').relatedProducts;

const ratingsAndReviewsRoutes = require('./routes/ratingsAndReviewsRoutes.js').ratingsAndReviewsRoutes;


var app = express()
port = 3000;
var path = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo';
var axios = require('axios');


app.use(express.static('./client/dist'));
app.use(express.json());

//routes
app.use('/relatedItemsData', relatedProductRoutes);
app.use('/reviews', ratingsAndReviewsRoutes);


//QA
var getAnswers = path + '/qa/questions/:questions_id/answers';
var addQuestion = path + '/qa/questions';
var addAnswer = path + '/qa/questions/:question_id/answers';
var markHelpful = path + '/qa/questions/:question_id/helpful';
var reportQ = path + '/qa/questions/:question_id/report';
var markAnsHelp = path + '/qa/answers/:answer_id/helpful';
var reportAns = path + 'qa/answers/:answer_id/report';
//QA

//Cart
var getCart = path + '/cart';
var postCart = path + 'cart';
//Cart

var token = require('../authorization.config.js').token;
var headers = {
  headers: { 'Authorization' : `${token}` }
}

//Products
//products

app.get('/products',(req, res) => {
  var allProducts = path + '/products';
  axios.get(allProducts, headers)
  .then((result) => {
    console.log('sent');
    res.send(result.data);
  })
  .catch((error) => {
    console.log(error);
  })
});

app.get('/products/:id', (req,res) => {
  var productId = path + '/products/' + req.params.id;
  axios.get(productId, headers)
  .then((result) => {
    res.send(result.data);
  })
  .catch((error) => {
    console.log(error);
  })
})

app.get('/products/:id/styles', (req,res) => {
  var productStyles = path + '/products/' + req.params.id + '/styles';
  axios.get(productStyles, headers)
  .then((result) => {
    res.send(result.data);
  })
  .catch((error) => {
    console.log(error);
  })
})

app.get('/products/:id/related', (req,res) => {
  console.log(req.params.id)
  var relatedProducts = path + '/products/' + req.params.id + '/related';
  axios.get(relatedProducts, headers)
  .then((result) => {
    res.send(result.data);
  })
  .catch((error) => {
    console.log(error);
  })
})

app.get('/productReview', (req, res) => {
  if (!req.query.id) {
    res.sendStatus(404);
  } else {
    reviewController.getProductRatings(req.query.id)
    .then(result => {
      res.send(result.toString());
    })
    .catch(err => {
      res.sendStatus(500);
    });
  }
})


//---------------------QA----------------------//
app.get('/qa/questions', (req, res) => {
  console.log(req.query.product_id)
  var getQA = path + '/qa/questions?product_id=' + req.query.product_id;
  axios.get(getQA, headers)
    .then(response => {
      res.send(response.data);
    })
    .catch(error => {
      {error}
    })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})