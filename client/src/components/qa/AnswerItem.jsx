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
      <>
        <div className="qaAnswerBody">{this.props.answer.body}</div>
        <AnswerOptions answerData={this.props.answer}/>
      </>
    )
  }
}

export default AnswerItem