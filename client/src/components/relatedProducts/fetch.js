import axios from 'axios';

var fetch = {
  getRelatedProducts: (id, cb) => {
    axios({
      url: `/relatedItemsData?id=${id}`,
      method: 'get',
    })
      .then(result => {
        cb(null, result.data);
      })
      .catch(err => {
        cb(err, null);
      })
  },
  getCurrentProductInformation: (id, cb) => {
    axios({
      url: `/currentProductInformation?id=${id}`,
      method: 'get',
    })
      .then(result => {
        cb(null, result.data);
      })
      .catch(err => {
        cb(err, null);
      })
  },
  sendInteraction: (widgetName, className) => {
    if (widgetName && typeof widgetName === 'string' && className && typeof className === 'string') {
      var date = new Date();
      var interactionObj = {
        'widget': widgetName,
        'element': className,
        'date': date
      }
      axios({
        url: `/interaction`,
        method: 'post',
        data: interactionObj
      })
        .then(result => {

        })
        .catch(err => {
          console.log('error sending interaction: ', err.message);
        })
    }
  },
  getProduct: (id, cb) => {
    if(id) {
      axios({
        url: `/products/${id}`,
        method: 'get'
      })
        .then(result => {
          cb(null, result)
        })
        .catch(err => {
          console.log('error in get Product');
        })
    }
  }
};

export default fetch;