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
      <div>
      <div className="qaQuestionBody"><span className="space">Q:</span> {this.props.q.question_body}
        <QuestionOptions productName={this.props.productName} q_body={this.props.q.question_body} helpfulness={this.props.q.question_helpfulness} q_id={this.props.q.question_id}/>
      </div>
      <hr className="qa_hr" />
      <AnswerList answers={this.props.q.answers}/>
      </div>
    )
  }
}

export default QuestionItem