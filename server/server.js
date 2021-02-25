var express = require('express')
var app = express()
port = 3000;

var path = 'https://app-hrsei-api.herokuapp.com/api/fec2/:hr-sfo';


app.use(express.static('./client/dist'));

app.use(express.json());



//Products
var allProducts = path + '/products';
var productId = path + '/products/:product_id';
var productStyles = path + '/products/:product_id/styles';
var relatedProducts = path + '/products/:product_id/related';
//products


//reviews
var getReviews = path + '/reviews';
var reviewMeta = path + '/reviews/meta';
var postReviews = path + '/reviews';
var putReviews = path + '/reviews/:reviews_id/helpful';
var putReport =  path + '/reviews/:review_id/report';
//reviews

//QA
var getQA = path + '/qa/questions';
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



// respond with "hello world" when a GET request is made to the homepage
app.get('/Hello', function (req, res) {
  console.log('sent');
  res.send('hello world');
});


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})