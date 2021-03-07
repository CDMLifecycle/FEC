const axios = require('axios');
const auth_token = require('../../authorization.config.js').token;

var url = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/interactions';

var interactionsController = {
  postInteraction: (interactionObject) => {
   return new Promise((resolve, reject) => {
    var options = {
      url: url,
      method: 'post',
      headers: {
        'Authorization': auth_token
      },
      data: interactionObject
    }

     axios(options)
       .then(result => {
         resolve(result);
       })
       .catch(err => {
         reject(err);
       })
     });
  }
}

module.exports.interactionsController = interactionsController;