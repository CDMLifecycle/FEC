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
      <div className="qaQuestionBody"><span className="space">Q:</span> {this.props.q.question_body}
        <QuestionOptions qHelpful={this.props.q.question_helpfulness} q_id={this.props.q.question_id}/>
      </div>
      <AnswerList answers={this.props.q.answers}/>
      </>
    )
  }
}

export default QuestionItem