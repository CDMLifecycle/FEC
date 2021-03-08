import React from 'react';
import StarThreeQuarters from './svg/starThreeQuarter.svg';
import StarHalf from './svg/starHalf.svg';
import StarNoFill from './svg/starNoFill.svg';
import StarQuarter from './svg/starQuarter.svg';
import StarFill from './svg/starFill.svg';
import StarYellow from './svg/starYellow.svg';


class SingleStar extends React.Component{
  constructor(props){
    super(props)
  }

  renderSwitch(num) {
    switch(num) {
      case 1:
        return <img src={StarFill} className='star' />;
      case -1:
        return <img src={StarNoFill} className='star' />;
      case .25:
        return <img src={StarQuarter} className='star' />;
      case .50:
        return <img src={StarHalf} className='star' />;
      case .75:
        return <img src={StarThreeQuarters} className='star' />;
    }
  }

 render() {
   return (this.renderSwitch(this.props.num))
  }
}

// const YellowStar = (props) => (<img src={StarYellow} className='star' />);



export default SingleStar;
