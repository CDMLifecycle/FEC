import React from 'react';
import ReactDOM from 'react-dom';

class AnswerForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      question: '',
      nickname: '',
      email: ''
    }
    this.closeModal = this.closeModal.bind(this);
    this.submitAForm = this.submitAForm.bind(this);

  }

  closeModal(e) {
    e.stopPropagation()
    this.props.addAnswer(e)
  }

  submitAForm(e) {
    e.preventDefault();
    this.closeModal(e);
    console.log('submit answer form');
  }

  render () {
    const divStyle = {
      display: this.props.displayModal ? 'block' : 'none'
    }
    return (
      <div>
        {this.props.displayModal ?
        (
          <div className="qaModal" onClick={this.closeModal}
          style={divStyle}>
            <div className="Modal-Content" onClick={e => e.stopPropagation()}>
              <span className="close" onClick={this.closeModal}>X</span>
              <form onSubmit={this.submitAForm}>
                <h3>Submit your answer</h3>
                <h5 className="qa_subtitle" >{this.props.productName}: {this.props.q_body}</h5>
                <label className="qa_label" name="Your Question">Your Answer</label><br />
                <textarea className="qInput qa-modal-form" type="text" maxLength="1000" placeholder="ENTER YOUR QUESTION..." autoComplete="off" required /><br />
                <label className="qa_label" name="nickname">Nickname</label><br />
                <input className="qInput" placeholder="EXAMPLE: jack543!" autoComplete="off" required /><br />
                <label className="qa_label" name="email">Email</label><br />
                <input className="qInput" placeholder="EXAMPLE: JACKSON@EMAIL.COM" maxLength="60" autoComplete="off" required /><br />
                <button className="submitAnswer">SUBMIT ANSWER</button>
              </form>
            </div>
          </div>
        )
        : (null)}
      </div>
    );
  }
}

export default AnswerForm;