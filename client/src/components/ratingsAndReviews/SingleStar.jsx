import React from 'react';
import StarThreeQuarters from './starsSVG/starThreeQuarter.svg';
import StarHalf from './starsSVG/starHalf.svg';
import StarNoFill from './starsSVG/starNoFill.svg';
import StarQuarter from './starsSVG/starQuarter.svg';
import StarFill from './starsSVG/starFill.svg';
import StarYellow from './starsSVG/starYellow.svg';


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
