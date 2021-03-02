import React from 'react';
import ReactDOM from 'react-dom';
import QuestionItem from './QuestionItem.jsx';

class QuestionList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

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
    console.log('you want to add a question')
  }


  render() {
    console.log(this.props.questions);
    return (
      <div>
        {this.props.questions.map((question) => {
          return (<QuestionItem q={question} key={question.question_id} />)
        })}
        <button onClick={this.moreQuestions}name="moreQuestions" className="qaBigButton qaCaps">More Answered Questions</button>
        <button name="addQuestion" onClick={this.addQuestion} className="qaBigButton qaCaps">Add A Question +</button>
      </div>
    )
  }

}

export default QuestionList