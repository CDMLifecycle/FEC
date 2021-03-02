import React from 'react';
import ReactDOM from 'react-dom';
import QuestionList from './QuestionList.jsx';
import axios from 'axios';


class QAMain extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      searchTerm: '',
      questions: []
    }
    this.handleQSearch = this.handleQSearch.bind(this);
    this.moreQuestions = this.moreQuestions.bind(this);
  }

  handleQSearch(e) {
    e.preventDefault();
    console.log('typing QA search');
    this.setState({
      searchTerm: event.target.value
    })
  }

  moreQuestions (e) {
    e.preventDefault();
    console.log('See 2 more questions, please!')
  }

  componentDidMount() {
    axios.get(`/qa/questions/`, {
      params: {
        product_id: this.props.productID
      }
    })
    .then(response => {
      console.log(Array.isArray(response.data.results));
      this.setState({
        questions: response.data.results
      })
    })
    .catch(reject => {
      console.log(reject);
    })
  }

  render() {
    return(
      <>
        <form className="QAMain">
          {'QUESTIONS & ANSWERS'}
          <input className="qaSearchBar qaCaps" type="search" name="search" placeholder="Have a question? Search for answers..." value={this.state.searchTerm} onChange={this.handleQSearch}/>
          <QuestionList questions={this.state.questions} />
        </form>
      </>
    )
  }
}

export default QAMain