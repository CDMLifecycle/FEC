const router = require('express').Router();
const interactionsController = require('../controller/interactions').interactionsController;


router.post('/', (req, res, next) => {
  if (!req.body.element || !req.body.widget || !req.body.time) {
    res.sendStatus(422);
  } else {
    interactionsController.postInteraction(req.body)
      .then(result => {
        res.sendStatus(201);
      })
      .catch(err => {
        console.log('err in interaction controller ', err);
        res.sendStatus(500);
      })
  }
});

module.exports.interactions = router;