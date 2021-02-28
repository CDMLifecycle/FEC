import React from 'react';
import ReactDOM from 'react-dom';

class QAMain extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      searchTerm: '',
      state: 0
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
          <input type="search" name="search" value={this.state.searchTerm}/>
          <Questions />
          <button name="moreQuestions"></button>
          <button name="addQuestion"></button>
        </form>
      </>
    )
  }
}

export default QAMain