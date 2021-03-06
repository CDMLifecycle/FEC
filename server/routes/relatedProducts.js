var router = require('express').Router();
var productController = require('../controller/products').productController;
var reviewController = require('../controller/reviews').reviewController;

/* -----------------------------helper functions ------------------------------*/

var combineRelatedProductInformation = (items, itemStyles, itemRatings) => {
  var outputArray = [];
  //order of arrays maintain correlation from Promise.all maintaing order
  for (let i = 0; i < items.length; i++) {
    let combined = {}
    combined.name = items[i].name;
    combined.id = items[i].id;
    combined.category = items[i].category;
    combined.default_price = items[i].default_price;
    combined.features = items[i].features;
    combined.sale_price = itemStyles[i].results[0].sale_price;
    combined.default = itemStyles[i].results[0].default;
    combined.photos = itemStyles[i].results[0].photos;
    combined.rating = itemRatings[i];
    combined.description = items[i].description;
    outputArray.push(combined);
  }
  return outputArray;
}

/* -----------------------------------router --------------------------------- */

router.get('/', (req, res, next) => {
  //get related item ids by id
  if (!req.query.id) {
    res.sendStatus(404);
  } else {
    var relatedItems;
    var relatedItemIds;
    var relatedItemStyles;
    var relatedItemRatings;
    var id = req.query.id;
    productController.getRelatedProductIds(id)
      .then(result => {
        //collect ids into array for future use
        relatedItemIds = result;
      //for each item, push it onto an array
        var relatedItemArray = [];
        result.forEach((relatedId) => {
          let resultPromise = productController.getProductById(relatedId);
          relatedItemArray.push(resultPromise);
        })
        return Promise.all(relatedItemArray);
      })
      .then(items => {
        relatedItems = items;
        var relatedItemStylesArray = [];
        relatedItemIds.forEach((relatedId) => {
          let resultPromise = productController.getProductStyles(relatedId);
          relatedItemStylesArray.push(resultPromise);
        })
        return Promise.all(relatedItemStylesArray);
      })
      .then(itemStyles => {
        relatedItemStyles = itemStyles;
        var relatedItemAverageRatings = [];
        relatedItemIds.forEach((relatedId) => {
          let resultPromise = reviewController.getProductRatings(relatedId);
          relatedItemAverageRatings.push(resultPromise);
        })
        return Promise.all(relatedItemAverageRatings);
      })
      .then(reviews => {
        relatedItemRatings = reviews;
        //now we combine items, styles, and reviews into single objects.
        var finalRelatedItemInformmationArray = combineRelatedProductInformation(relatedItems, relatedItemStyles, relatedItemRatings);
        res.send(finalRelatedItemInformmationArray);
      })
      .catch(err => {
        res.status(500).send(err.message);
      });
  }
})


module.exports.relatedProducts = router;
module.exports.combineRelatedProductInformation = combineRelatedProductInformation;