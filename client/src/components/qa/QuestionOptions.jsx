import React from 'react';

class QuestionOptions extends React.Component {
  constructor(props){
    super(props)

    this.state = {

    }
    this.qHelpful = this.qHelpful.bind(this);
    this.addAnswer = this.addAnswer.bind(this);
  }

  qHelpful (e) {
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
        <span id="helpfulQ">Helpful? </span>
        <button className="helpful qaLinkButton" onClick={this.qHelpful}>Yes</button> (#)
        <span className="qaDivider">|</span>
        <button className="helpful qaLinkButton" onClick={this.addAnswer}>Add Answer</button>
      </div>
    )
  }
}

export default QuestionOptions