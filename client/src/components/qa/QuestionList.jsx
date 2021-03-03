import React from 'react';
import ReactDOM from 'react-dom';
import QuestionItem from './QuestionItem.jsx';
import QuestionForm from './QuestionForm.jsx';

class QuestionList extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      modal: false,
      questions: this.props.questions,
      questionLimit: 2
    }

    this.moreQuestions = this.moreQuestions.bind(this);
    this.addQuestion = this.addQuestion.bind(this);
  }

  moreQuestions (e) {
    e.preventDefault();
    let newLimit = this.state.questionLimit + 2;
    this.setState({
      questionLimit: newLimit
    })
  }

  addQuestion (e) {
    e.preventDefault();
    this.setState({
      modal: !this.state.modal
    })
    console.log('you want to add a question')
  }

  componentDidMount () {
    this.setState({
      questions: this.props.questions
    })
  }

  render() {
    console.log('questionLimit', this.state.questionLimit, 'questions', this.state.questions);
    return (
      <div>
        {this.props.questions.slice(0, this.state.questionLimit).map((question) => {
          return (
            <QuestionItem q={question} key={question.question_id} />
          )
        })}
        <div className="questionButtons">
          {this.props.questions.length > this.state.questionLimit ?
            (<button onClick={this.moreQuestions} name="moreQuestions" className="qaBigButton qaCaps">More Answered Questions</button>)
            : (null)
          }
          <button name="addQuestion" onClick={this.addQuestion} className="qaBigButton qaCaps">Add A Question +</button>
          <QuestionForm />
        </div>
      </div>
    )
  }

}

export default QuestionList