import React from 'react';
import ReactDOM from 'react-dom';
import AnswerItem from './AnswerItem.jsx'

class AnswerList extends React.Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }
  showMoreAnswers (e) {
    e.preventDefault();
    console.log('clicked on See More Answers')
  }
  render() {
    return (
      <div>
        A: <AnswerItem />
        <button className="qaCaps qaLinkButton moreAnswers" onClick={this.showMoreAnswers}>Load More Answers</button>
      </div>
    )
  }
}

export default AnswerList