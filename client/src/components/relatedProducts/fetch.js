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
  }
};

export default fetch;