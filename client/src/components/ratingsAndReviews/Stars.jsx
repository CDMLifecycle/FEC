import React from 'react';
import SingleStar from './SingleStar.jsx';


class Stars extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){

  }

  render () {
    if (!this.props.avgQtr) {
      return null;
    }
    let partialStar = this.props.avgQtr % 1;
    let wholeStar = this.props.avgQtr - partialStar;
    let noStar = 5 - wholeStar;

    let starSet = []

    for (let i = 0; i < wholeStar; i++) {
      starSet.push(1)
    };
    if (partialStar > 1) {
      starSet.push(partialStar)
    }
    for (let i = 0; i < noStar; i++) {
      starSet.push(-1)
    };

    // const stars = starSet.map(starType => <SingleStar num={starType} />)

    return (
      <div className='star-container'>
        {starSet.map(starType => <SingleStar num={starType} />)}
      </div>
    )
  }
}


export default Stars;