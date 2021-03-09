import React from 'react';
import AnswerForm from './AnswerForm.jsx';

class QuestionOptions extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      modal: false
    }

    this.markQHelpful = this.markQHelpful.bind(this);
    this.addAnswer = this.addAnswer.bind(this);
    // this.closeModal = this.closeModal.bind(this);
  }

  markQHelpful (e) {
    e.preventDefault();
    console.log('this question is helpful');
  }

  addAnswer (e) {
    e.preventDefault();
    console.log('you want to add an answer');
    this.setState({
      modal: !this.state.modal
    })
  }


  render() {
    return(
      <div className="questionOptions">
        <span className="space">Helpful?   </span>
        <button className="helpful qaLinkButton qaButton" onClick={this.markQHelpful}>Yes</button> ({this.props.qHelpful})
        <span className="qaDivider">|</span>
        <button className="qaLinkButton qaButton" onClick={this.addAnswer}>Add Answer</button>
        <AnswerForm productName={this.props.productName} q_body={this.props.q_body} displayModal={this.state.modal} closeModal={this.addAnswer}/>
      </div>
    )
  }
}

export default QuestionOptions