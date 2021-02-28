import React from 'react';
import Answers from './Answers.jsx'

class QuestionItem extends React.Component {
  constructor(props){
    super(props)

    this.state = {

    }
  }

  render() {
    return (
      <div>
        Q: Question body<br />
        A: <Answers />
      </div>
      // this.props.questions.map((question) => {
      // })
    )
  }
}

export default QuestionItem