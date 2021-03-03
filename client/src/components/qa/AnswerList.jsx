import React from 'react';
import ReactDOM from 'react-dom';
import AnswerItem from './AnswerItem.jsx'

class AnswerList extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      answers: Object.values(this.props.answers),
      showAnswers: [],
      answerLimit: 2
    }
    this.showMoreAnswers = this.showMoreAnswers.bind(this);
  }
  showMoreAnswers (e) {
    e.preventDefault();
    let updateLimit = this.state.answerLimit + 2;
    this.setState({
      answerLimit: updateLimit
    })
    console.log('clicked on See More Answers')
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
          <button className="qaCaps qaLinkButton moreAnswers qaButton" onClick={this.showMoreAnswers}>Load More Answers</button>) : (null)}
      </div>
    )
  }
}

export default AnswerList