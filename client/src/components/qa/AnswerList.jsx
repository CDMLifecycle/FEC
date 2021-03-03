import React from 'react';
import ReactDOM from 'react-dom';
import AnswerItem from './AnswerItem.jsx'

class AnswerList extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      answers: Object.values(this.props.answers),
      answerLimit: 2
    }
    this.showMoreAnswers = this.showMoreAnswers.bind(this);
    this.showLessAnswers = this.showLessAnswers.bind(this);
  }
  showMoreAnswers (e) {
    e.preventDefault();
    let updateLimit = this.state.answerLimit + 2;
    this.setState({
      answerLimit: updateLimit
    })
    console.log('clicked on See More Answers')
  }

  showLessAnswers (e) {
    e.preventDefault();
    this.setState({
      answerLimit: 2
    })
  }

  componentDidMount() {
  }

  render() {
    return (
      <div>
        {this.state.answers.slice(0, this.state.answerLimit).map((answer) => {
          return (
            <AnswerItem answer={answer} key={answer.id}/>
          )
        })}
        {this.state.answers.length > this.state.answerLimit ? (
          <button className="qaCaps qaLinkButton moreAnswers qaButton" onClick={this.showMoreAnswers}>Load More Answers</button>)
          : this.state.answers.length === 0 || this.state.answers.length === this.state.answerLimit ? (null)
          : (<button className="qaCaps qaLinkButton moreAnswers qaButton" onClick={this.showLessAnswers}>Collapse Answers</button>)}
      </div>
    )
  }
}

export default AnswerList