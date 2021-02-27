var router = require('express').Router();
var productController = require('../controller/products.js').productController;


router.get('/', (req, res, next) => {
  //get related item ids by id
  if (!req.query.id) {
    res.sendStatus(404);
  } else {
    var id = req.query.id;
    productController.getRelatedProductIds(id)
      .then(result => {
      //for each item, push it onto an array
        var relatedItemArray = [];
        result.forEach((relatedId) => {
          let resultPromise = productController.getProductById(relatedId);
          relatedItemArray.push(resultPromise);
        })
        return Promise.all(relatedItemArray);
      })
      .then(items => {
        res.send(items)
      })
      .catch(err => {
        console.log(err);
        res.status(500).send(err.message);
      });
  }
})


module.exports.relatedProducts = router;