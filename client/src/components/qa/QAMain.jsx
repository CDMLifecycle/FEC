import React from 'react';
import ReactDOM from 'react-dom';
import QuestionList from './QuestionList.jsx';
import axios from 'axios';


class QAMain extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      searchTerm: '',
      questions: [],
      productID: 0,
      filteredQuestions: []
    }
    this.handleQSearch = this.handleQSearch.bind(this);
    this.getNewQA = this.getNewQA.bind(this);
  }

  handleQSearch (e) {
    e.preventDefault();
    this.setState({
      searchTerm: e.target.value.toLowerCase()
    }, () => {
      if (this.state.searchTerm.length > 2) {
        var filtered = this.state.questions.filter((question) => {
          return question.question_body.includes(this.state.searchTerm)
        })
        this.setState({
          filteredQuestions: filtered
        });
      } else {
        this.setState({
          filteredQuestions: this.state.questions
        })
      }
    })
  }

  getNewQA() {
    axios.get(`/qa/questions/`, {
      params: {
        product_id: this.props.productID
      }
    })
    .then(response => {
      this.setState({
        questions: response.data.results,
        filteredQuestions: response.data.results,
        productID: this.props.productID
      })
    })
    .catch(reject => {
      console.log(reject);
    })
  }

  componentDidUpdate() {
    if (this.state.productID !== this.props.productID) {
      this.getNewQA();
    }
  }

  render() {
    return(
      <>
        <div className="QAMain">
          <h2 className="qa_title">
          {'QUESTIONS & ANSWERS'}
          </h2>
          <input className="qaSearchBar qaCaps" type="search" name="search" placeholder="Have a question? Search for answers..." autoComplete="off" value={this.state.searchTerm} onChange={this.handleQSearch}/>
          <QuestionList productID={this.state.productID} productName={this.props.searchedArr[0].name} questions={this.state.filteredQuestions} />
        </div>
      </>
    )
  }
}

export default QAMain