import React from 'react';
import AnswerOptions from './AnswerOptions.jsx';

class AnswerItem extends React.Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }

  render() {
    return (
      <div className="qaAnswerList">
        <div className="flexRow">
          <div>A: </div>
          <div className="qaAnswerBody"> {this.props.answer.body}</div>
        </div>
        <AnswerOptions answerData={this.props.answer}/>
      </div>
    )
  }
}

export default AnswerItem