import React from 'react';
import axios from 'axios';
class App extends React.Component {
  constructor() {
    super();

    this.state = {
      productArr:  [],
    }
  }

  componentDidMount() {
    axios.get('/products')
    .then((res) => {
      console.log(res.data);
    })
    .catch((error) => {
      console.log(error);
    })
  }

  render() {
    return (
    <form>
      <div> App renders properly </div>
    </form>
    );
  }
}

export default App;