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
        <form onSubmit={submitAForm}>
          <h3>Submit your answer</h3>
          <h5 className="qa_subtitle" >{props.productName}: {props.q_body}</h5>
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

  return (
    props.displayModal ? (AForm) : (null)
  )
}

export default AnswerForm;