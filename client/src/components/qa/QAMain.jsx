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
        <div className="QAMain">
          <h2 className="qa_title">
          {'QUESTIONS & ANSWERS'}
          </h2>
          <input className="qaSearchBar qaCaps" type="search" name="search" placeholder="Have a question? Search for answers..." autoComplete="off" value={this.state.searchTerm} onChange={this.handleQSearch}/>
          <QuestionList productName={this.props.searchedArr[0].name} questions={this.state.questions} />
        </div>
      </>
    )
  }
}

export default QAMain