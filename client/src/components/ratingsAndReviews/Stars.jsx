import React from 'react';
import SingleStar from './SingleStar.jsx';
import './stars.css';


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
    let noStar = partialStar > 0 ? 4 - wholeStar : 5 - wholeStar;

    let starSet = []

    for (let i = 0; i < wholeStar; i++) {
      starSet.push(1)
    };
    if (partialStar > 0) {
      starSet.push(partialStar)
    }
    for (let i = 0; i < noStar; i++) {
      starSet.push(-1)
    };
    return (this.props.size
      ?
        (<div className='star-container'>
            {starSet.map((starType, index) => <SingleStar num={starType} size={this.props.size} key={index}/>)}
          </div>)
      :  null
    )}
}

export default Stars;