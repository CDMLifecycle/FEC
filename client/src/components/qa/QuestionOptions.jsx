import React from 'react';

class QuestionOptions extends React.Component {
  constructor(props){
    super(props)

    this.state = {

    }

    this.markQHelpful = this.markQHelpful.bind(this);
    this.addAnswer = this.addAnswer.bind(this);
  }

  markQHelpful (e) {
    e.preventDefault();
    console.log('this question is helpful');
  }

  addAnswer (e) {
    e.preventDefault();
    console.log('you want to add an answer');
  }



  render() {
    return(
      <div className="questionOptions">
        <span id="underline">Helpful? </span>
        <button className="helpful qaLinkButton qaButton" onClick={this.markQHelpful}>Yes</button> ({this.props.qHelpful})
        <span className="qaDivider">|</span>
        <button className="underline qaLinkButton qaButton" onClick={this.addAnswer}>Add Answer</button>
      </div>
    )
  }
}

export default QuestionOptions