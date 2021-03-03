import React from 'react';
import ReactDOM from 'react-dom';

const QuestionForm = props => {
  const divStyle = {
    display: props.displayModal ? 'block' : 'none'
  }
  function closeModal(e) {
    e.stopPropagation()
    props.closeModal()
  }
  return (
    <div className="modal" onClick={ closeModal }
    style={divStyle}>
      <div className="modal-content" onClick={ e => e.stopPropagation() }>
        <span className="close" onClick={ closeModal }>Close</span>
      </div>
    </div>
  )
}





// class QuestionForm extends React.Component {
//   constructor(props) {
//     super(props)

//     this.state = {

//     }
//   }

//   render() {
//     return (
//       <>

//       </>
//     )
//   }
// }


export default QuestionForm