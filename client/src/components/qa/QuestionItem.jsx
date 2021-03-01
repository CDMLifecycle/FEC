import React from 'react';
import AnswerList from './AnswerList.jsx'
import QuestionOptions from './QuestionOptions.jsx'


class QuestionItem extends React.Component {
  constructor(props){
    super(props)

    this.state = {

    }
  }

  render() {
    return (
      <>
      <div className="qaQuestionBody">Q: {'Muffin tart bear claw macaroon toffee toffee cake icing candy canes?'}
      <QuestionOptions />
      </div>
      <AnswerList />
      </>
    )
  }
}

export default QuestionItem