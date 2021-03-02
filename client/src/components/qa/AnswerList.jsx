import React from 'react';
import ReactDOM from 'react-dom';
import AnswerItem from './AnswerItem.jsx'

class AnswerList extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      answers: Object.values(this.props.answers),
      showAnswerLimit: 2
    }
  }
  showMoreAnswers (e) {
    e.preventDefault();
    console.log('clicked on See More Answers')
  }

  componentDidMount() {
    this.setState({
    })
  }

  render() {
    return (
      <div>
        {this.state.answers.map((answer) => {
          return (
            <AnswerItem answer={answer} key={answer.id}/>
          )
        })}
        {this.state.answers.length > this.state.showAnswerLimit ? (
          <button className="qaCaps qaLinkButton moreAnswers qaButton" onClick={this.showMoreAnswers}>Load More Answers</button>) : (null)}
      </div>
    )
  }
}

export default AnswerList