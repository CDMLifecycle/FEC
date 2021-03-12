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
      productID: 0
    }
    this.handleQSearch = this.handleQSearch.bind(this);
    this.getNewQA = this.getNewQA.bind(this);
  }

  handleQSearch(e) {
    e.preventDefault();
    this.setState({
      searchTerm: event.target.value
    })
  }

  static getDerivedStateFromProps(props, state) {
    if(props.productID !== state.productID) {
      return {
        productID: props.productID
      }
    };
    return null;
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
        productID: this.props.productID
      })
    })
    .catch(reject => {
      console.log(reject);
    })

  }

  // componentDidMount() {
  //   this.getNewQA();
  // }

  componentDidUpdate() {
    this.getNewQA();
  }


  render() {
    return(
      <>
        <div className="QAMain">
          <h2 className="qa_title">
          {'QUESTIONS & ANSWERS'}
          </h2>
          <input className="qaSearchBar qaCaps" type="search" name="search" placeholder="Have a question? Search for answers..." autoComplete="off" value={this.state.searchTerm} onChange={this.handleQSearch}/>
          <QuestionList productID={this.state.productID} productName={this.props.searchedArr[0].name} questions={this.state.questions} />
        </div>
      </>
    )
  }
}

export default QAMain