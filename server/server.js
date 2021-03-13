var express = require('express')
var productController = require('./controller/products').productController;
var reviewController = require('./controller/reviews').reviewController;
var relatedProductRoutes = require('./routes/relatedProducts').relatedProducts;
var curentProductInformationRoute = require('./routes/currentProductInformation').curentProductInformation;
const ratingsAndReviewsRoutes = require('./routes/ratingsAndReviewsRoutes.js').ratingsAndReviewsRoutes;
const interactionRoute = require('./routes/interactionRoute.js').interactions;

var app = express()
port = 3000;
var path = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo';
var axios = require('axios');


app.use(express.static('./client/dist'));
app.use(express.json());

//routes
app.use('/relatedItemsData', relatedProductRoutes);
app.use('/reviews', ratingsAndReviewsRoutes);
app.use('/currentProductInformation', curentProductInformationRoute);
app.use('/interaction', interactionRoute);

//QA
var getAnswers = path + '/qa/questions/:questions_id/answers';
var reportQ = path + '/qa/questions/:question_id/report';
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

app.get('/products',(req, res) => {
  var allProducts = path + '/products/?count=20';
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
  var getQA = path + '/qa/questions?product_id=' + req.query.product_id + '&count=100';
  axios.get(getQA, headers)
    .then(response => {
      res.send(response.data);
    })
    .catch(error => {
      {error}
    })
})

app.put('/answer/update', (req, res) => {
  var markAns = path + `/qa/answers/${req.body.id}/${req.body.target}`;
  axios.put(markAns, {}, headers)
    .then(response => {
      res.status(204).send(response.data);
    })
    .catch(reject => {
      console.log('failed in server', reject);
    })
})

app.put('/questions/update', (req, res) => {
  var markHelpful = path + `/qa/questions/${req.body.id}/${req.body.target}`;
  axios.put(markHelpful, {}, headers)
    .then(response => {
      res.status(204).send(response.data);
    })
    .catch(reject => {
      console.log('qa_markQHelpful failed in sever', reject);
    });
});

app.post('/qa/question/answer', (req, res) => {
  var addAnswer = path + `/qa/questions/${req.body.id}/answers`;
  axios.post(addAnswer, {
    body: req.body.body,
    name: req.body.name,
    email: req.body.email,
    photos: req.body.photos
  }, headers)
    .then(response => {
      res.status(201).send(response.data);
    })
    .catch(reject => {
      console.log('failed in server posting', reject);
    })
});

app.post('/qa/question/post', (req, res) => {
  console.log(req.body);
  var addQuestion = path + '/qa/questions';
  axios.post(addQuestion, {
    body: req.body.body,
    name: req.body.name,
    email: req.body.email,
    product_id: req.body.product_id
  }, headers)
    .then(response => {
      console.log('Created');
      res.status(201).send(response.data);
    })
    .catch(reject => {
      console.log('failed in server posting Q', reject);
    })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})