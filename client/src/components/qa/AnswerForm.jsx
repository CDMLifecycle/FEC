import React from 'react';
import ReactDOM from 'react-dom';

const AnswerForm = props => {
  const divStyle = {
    display: props.displayModal ? 'block' : 'none'
  }
  function closeModal(e) {
    e.stopPropagation()
    props.closeModal(e)
  }

  function submitAForm(e) {
    e.preventDefault();
    console.log('submit answer form');
  }

  let AForm = (
    <div className="qaModal" onClick={closeModal}
    style={divStyle}>
      <div className="Modal-Content" onClick={e => e.stopPropagation()}>
        <span className="close" onClick={closeModal}>Close</span>
        <form onSubmit={this.submitAForm}>
          <label className="qa_label" name="Your Question">Your Question</label><br />
          <textarea className="qInput q-modal-form" type="text" maxLength="1000" placeholder="ENTER YOUR QUESTION..." autoComplete="off" required /><br />
          <label className="qa_label" name="nickname">Nickname</label><br />
          <input className="qInput" placeholder="EXAMPLE: JACKSON11!" autoComplete="off" required /><br />
          <p className="qa_label">For privacy reasons, do not use your full name or email address</p><br />
          <label className="qa_label" name="email">Email</label><br />
          <input className="qInput" placeholder="EXAMPLE: JACKSON11@EMAIL.COM" maxLength="60" autoComplete="off" required /><br />
          <p className="qa_label">For authentication reasons, you wil not be emailed</p><br />
          <button className="submitQuestion">SUBMIT QUESTION</button>
        </form>
      </div>
    </div>
  )

  return (
    props.displayModal ? (Form) : (null)
  )
}

export default AnswerForm;