import React from 'react';
import ReactDOM from 'react-dom';
import QuestionItem from './QuestionItem.jsx';
import QuestionForm from './QuestionForm.jsx';

class QuestionList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      modal: false
    }

    this.moreQuestions = this.moreQuestions.bind(this);
    this.addQuestion = this.addQuestion.bind(this);
  }

  moreQuestions (e) {
    e.preventDefault();
    console.log('show more questions');
  }

  addQuestion (e) {
    e.preventDefault();
    this.setState({
      modal: !this.state.modal
    })
    console.log('you want to add a question')
  }

  render() {
    console.log('question list')
    return (
      <div>
        {this.props.questions.map((question) => {
          return (<QuestionItem q={question} key={question.question_id} />)
        })}
        <div className="questionButtons">
          <button onClick={this.moreQuestions}name="moreQuestions" className="qaBigButton qaCaps">More Answered Questions</button>
          <button name="addQuestion" onClick={this.addQuestion} className="qaBigButton qaCaps">Add A Question +</button>
          <QuestionForm />
        </div>
      </div>
    )
  }

}

export default QuestionList