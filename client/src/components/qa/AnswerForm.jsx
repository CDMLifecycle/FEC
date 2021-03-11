import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class AnswerForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      form: {
        answer: '',
        nickname: '',
        email: '',
        photos: []
      }
    }
    this.closeModal = this.closeModal.bind(this);
    this.submitAForm = this.submitAForm.bind(this);
    this.onType = this.onType.bind(this);
  }

  closeModal(e) {
    e.stopPropagation()
    this.props.addAnswer(e)
  }

  submitAForm(e) {
    e.preventDefault();
    axios.post('/qa/question/answer', {
      id: this.props.q_id,
      body: this.state.answer,
      name: this.state.nickname,
      email: this.state.email,
      photos: this.state.photos
    })
      .then(response => {
        console.log(response.data)
      })
      .catch(reject => {
        console.log('failed in client answer form', reject);
      })
    this.closeModal(e);
  }

  onType(e) {
    e.preventDefault();
    var key = e.target.name;
    this.setState({
      [key]: e.target.value
    })
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
              <span className="close" onClick={this.closeModal}>✖</span>
              <form className="qa_form" onSubmit={this.submitAForm}>
                <h3>Submit your answer</h3>
                <h5 className="qa_subtitle" >{this.props.productName}: {this.props.q_body}</h5>
                <label className="qa_label" name="Your Question">Your Answer</label><br />
                <textarea className="qInput qa-modal-form" type="text" minLength="3" maxLength="1000" placeholder="ENTER YOUR ANSWER..." autoComplete="off" required name="answer" value={this.state.answer} onChange={this.onType} /><br />
                <label className="qa_label">Nickname</label><br />
                <input className="qInput" type="text" placeholder="EXAMPLE: jack543!" name="nickname" minLength="2" autoComplete="off" required value={this.state.nickname} onChange={this.onType}/><br />
                <label className="qa_label" name="email">Email</label><br />
                <input className="qInput" type="email" name="email" placeholder="EXAMPLE: JACKSON@EMAIL.COM" maxLength="60" autoComplete="off" required value={this.state.email} onChange={this.onType}/><br />
                {/* <label className="qa_label" name="answerImg">Add Images</label> */}
                <input className="qa_imgUpload" type="file" name="answerImg" placeholder="Upload Images" /><br />
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