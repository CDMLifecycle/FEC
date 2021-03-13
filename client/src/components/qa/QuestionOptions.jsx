import React from 'react';
import AnswerForm from './AnswerForm.jsx';
import axios from 'axios';

class QuestionOptions extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      modal: false,
      helpfulness: 0,
      markedHelpful: false
    }

    this.markQHelpful = this.markQHelpful.bind(this);
    this.addAnswer = this.addAnswer.bind(this);
  }

  markQHelpful (e) {
    e.preventDefault();
    this.setState({
      markedHelpful: true
    });
    axios.put('/questions/update', {
      id: this.props.q_id,
      target: 'helpful'
    })
      .then(response => {
        this.setState({
          helpfulness: this.state.helpfulness + 1
        })
      })
      .catch(reject => {
        console.log('qa_markQHelpful failed in client', reject);
        this.setState({
          markedHelpful: false
        })
      })
  }

  addAnswer (e) {
    this.setState({
      modal: !this.state.modal
    })
  }

  componentDidMount() {
    this.setState({
      helpfulness: this.props.helpfulness
    })
  }

  render() {
    return(
      <div className="questionOptions">
        <span className="space">Helpful?</span>
        {!this.state.markedHelpful ? (
          <button className="helpful qaLinkButton qaButton" onClick={this.markQHelpful}>Yes</button>
          )
          : '✓'
        }
        ({this.state.helpfulness})
        <span className="qaDivider">|</span>
        <button className="qaLinkButton qaButton" onClick={this.addAnswer}>Add Answer</button>
        <AnswerForm productName={this.props.productName} q_body={this.props.q_body} q_id={this.props.q_id} displayModal={this.state.modal} addAnswer={this.addAnswer}/>
      </div>
    )
  }
}

export default QuestionOptions