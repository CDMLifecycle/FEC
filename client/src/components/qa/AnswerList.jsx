import React from 'react';
import ReactDOM from 'react-dom';
import AnswerItem from './AnswerItem.jsx'

class AnswerList extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      answers: [],
      answerLimit: 2
    }
    this.showMoreAnswers = this.showMoreAnswers.bind(this);
    this.showLessAnswers = this.showLessAnswers.bind(this);
  }
  showMoreAnswers (e) {
    e.preventDefault();
    let updateLimit = this.state.answers.length;
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

  static getDerivedStateFromProps(props, state) {
    if (props.answers) {
      var answersArray = Object.values(props.answers)
      if (state.answers !== props.answers) {
        return {answers: answersArray};
      }
    }
    return null;
  }


  componentDidMount() {

  }

  // Object.values(this.props.answers)

  render() {
    return (
      <>
      {this.state.answers.length !== 0 ?
      <div className="answersContainer">
        {this.state.answers.slice(0, this.state.answerLimit).map((answer) => {
          return (
            <AnswerItem answer={answer} key={answer.id}/>
            )
          })}
        {this.state.answers.length > this.state.answerLimit ? (
          <button className="qaCaps qaLinkButton moreAnswers qaButton" onClick={this.showMoreAnswers}>Load More Answers</button>)
          : this.state.answers.length <= 2 ? (null)
          : (
            <button className="qaCaps qaLinkButton moreAnswers qaButton" onClick={this.showLessAnswers}>Collapse Answers</button>
            )}
      </div>
      : (null)}
      </>
    )
  }
}

export default AnswerList


// if (state.anwers.length > answerlimit) {
//   show load more buttons
// } else {
//   if(state.answers.length !== limit) {
//     show collapse
//   } else {
//     null
//   }
// }