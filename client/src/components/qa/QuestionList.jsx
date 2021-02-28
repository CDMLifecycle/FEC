import React from 'react';
import ReactDOM from 'react-dom';
import QuestionItem from './QuestionItem.jsx'

class QuestionList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }

  }

  render() {
    return (
      <div>
        <QuestionItem />
      </div>
    )
  }

}

export default QuestionList