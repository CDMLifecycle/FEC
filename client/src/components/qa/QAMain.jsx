import React from 'react';
import ReactDOM from 'react-dom';
import QuestionList from './QuestionList.jsx';


class QAMain extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      searchTerm: ''
    }
    this.handleQSearch = this.handleQSearch.bind(this);
  }

  handleQSearch(e) {
    e.preventDefault();
    console.log('typing QA search');
    this.setState({
      searchTerm: event.target.value
    })
  }


  render() {
    return(
      <>
        <form>
          <input type="search" name="search" value={this.state.searchTerm} onChange={this.handleQSearch}/>
          <QuestionList />
          <button name="moreQuestions">More Questions</button>
          <button name="addQuestion">Add Question</button>
        </form>
      </>
    )
  }
}

export default QAMain