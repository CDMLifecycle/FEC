import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class QuestionForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      form: {
        question: '',
        nickname: '',
        email: ''
      },
      productID: 0
    }
    this.closeModal = this.closeModal.bind(this);
    this.submitQForm = this.submitQForm.bind(this);
    this.onType = this.onType.bind(this);
  }

    static getDerivedStateFromProps(props, state) {
    if(props.productID !== state.productID) {
      return {
        productID: props.productID
      }
    };
    return null;
  }

  closeModal (e) {
    e.stopPropagation()
    this.props.closeModal(e)
  }

  submitQForm (e) {
    e.preventDefault();
    axios.post('/qa/question/post', {
      body: this.state.question,
      name: this.state.nickname,
      email: this.state.email,
      product_id: this.state.productID
    })
      .then(response => {
        console.log(response)
      })
      .catch(reject => {
        console.log('failed in client', error);
      });
    this.closeModal(e);
  }

  onType (e) {
    e.preventDefault();
    var key = e.target.name;
    this.setState({
      [key]: e.target.value
    })
  }

  render() {
    const divStyle = {
      display: this.props.displayModal ? 'block' : 'none'
    }
    return (
      <div>
        {this.props.displayModal ?
          <div
            className="qaModal"
            onClick={this.closeModal}
            style={divStyle}>
            <div
            className="Modal-Content"
            onClick={e => e.stopPropagation()}>
              <span
                className="close"
                onClick={this.closeModal}>
                  ✖
              </span>
              <form
                className="qa_form"
                onSubmit={this.submitQForm}>
                <h3>
                  Ask Your Question
                </h3>
                <h5 className="qa_subtitle">
                  About the {this.props.productName}
                </h5>
                <label
                  for="question"
                  className="qa_label"
                  name="Your Question">
                    Your Question
                </label><br />
                <textarea
                  className="qInput q-modal-form"
                  type="text"
                  name="question"
                  minLength="10"
                  maxLength="1000"
                  placeholder="ENTER YOUR QUESTION..."
                  autoComplete="off"
                  value={this.state.question}
                  onChange={this.onType}
                  required /><br />
                <label
                  for="nickname"
                  className="qa_label"
                  name="nickname">
                    Nickname
                </label><br />
                <input
                  className="qInput"
                  type="text"
                  name="nickname"
                  placeholder="EXAMPLE: JACKSON11!"
                  autoComplete="off"
                  minLength="2"
                  value={this.state.nickname}
                  onChange={this.onType}
                  required /><br />
                <p className="qa_label">
                  For privacy reasons, do not use your full name or email address
                </p><br />
                <label
                  for="email"
                  className="qa_label"
                  name="email">
                    Email
                </label><br />
                <input
                  className="qInput"
                  type="email"
                  name="email"
                  placeholder="EXAMPLE: JACKSON11@EMAIL.COM"
                  maxLength="60"
                  autoComplete="off"
                  value={this.state.email}
                  onChange={this.onType}
                  required /><br />
                <p className="qa_label">
                  For authentication reasons, you wil not be emailed
                </p><br />
                <label for=""></label>
                <button className="submitQuestion">
                  SUBMIT QUESTION
                </button>
              </form>
            </div>
          </div>
        : (null)}
      </div>
    )
  }
}


export default QuestionForm