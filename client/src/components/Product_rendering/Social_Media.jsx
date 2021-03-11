import React from 'react';

class Social_Media extends React.Component {
  constructor(props){
    super(props);

    this.state = {

    }
  }

  render() {
    return(
      <div className='socialContainer'>
        <button className='socialButton'>
          <img src='https://image.flaticon.com/icons/png/512/124/124010.png' width='20px' height='20px'></img>
        </button>
        <button className='socialButton'><img src='https://louisville.edu/philosophy/images/icons-for-footer/twittericon2.png/image' width='20px' height='20px'></img></button>
        <button className='socialButton'><img src='https://paintestimating.com/wp-content/uploads/2018/07/pinterest-icon-297x300.png' width='20px' height='20px'></img></button>
      </div>
    )
  }
};

export default Social_Media;