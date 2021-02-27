const axios = require('axios');
const auth_token = require('../../authorization.config.js').token;

var options = {
  headers: {
    'Authorization': auth_token
  }
}
var url = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/products';

var productController = {
  getAllProducts: () => {
   return new Promise((resolve, reject) => {
     axios.get(url, options)
       .then(result => {
         resolve(result.data);
       })
       .catch(err => {
         reject(err);
       })
     });
  },
  getProductById: (id) => {
    return new Promise((resolve, reject) => {
      axios.get(url + `/${id}`, options)
        .then(result => {
          resolve(result.data);
        })
        .catch(err => {
          reject(err);
        })
      });
  },
  getProductStyles: (id) => {
    return new Promise((resolve, reject) => {
      axios.get(url + `/${id}/styles`, options)
        .then(result => {
          resolve(result.data);
        })
        .catch(err => {
          reject(err);
        })
      });
  },
  getRelatedProductIds: (id) => {
    return new Promise((resolve, reject) => {
      axios.get(url + `/${id}/related`, options)
        .then(result => {
          resolve(result.data);
        })
        .catch(err => {
          reject(err);
        })
      });
  }
}

module.exports.productController = productController;