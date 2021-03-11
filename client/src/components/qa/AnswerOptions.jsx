import React from 'react';
import axios from 'axios';


class AnswerOptions extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      reported: false,
      reportText: '',
      helpfulness: 0,
      markedHelpful: false
    }
    this.aHelpful = this.aHelpful.bind(this);
    this.report = this.report.bind(this);
    // this.formatDate = this.formatDate.bind(this);
  }

  aHelpful (e) {
    e.preventDefault();
    axios.put('/answer/helpful', {
      id: this.props.answerData.id,
      target: 'helpful'
    })
      .then(response => {
        this.setState({
          helpfulness: this.state.helpfulness + 1,
          markedHelpful: true
        });
      })
      .catch(reject => {
        console.log('failed in client', reject);
      })
  }

  formatDate(isoDate){
  let date = new Date(isoDate);
    let months = {
      1: 'January',
      2: 'February',
      3: 'March',
      4: 'April',
      5: 'May',
      6: 'June',
      7: 'July',
      8: 'August',
      9: 'September',
      10: 'October',
      11: 'November',
      12: 'December'
    }

    let month = (date.getMonth() + 1).toString();
    date = `${months[month]} ${date.getDate()}, ${date.getFullYear()}`;
    return date;
  }

  report (e) {
    e.preventDefault();
    this.setState({
      reported: true
    });
    axios.put('/answer/update', {
      id: this.props.answerData.id,
      target: 'report'
    })
      .then(response => {
        console.log('successful answer report');
      })
      .catch(reject => {
        console.log('failed to report answer in client');
      })
    console.log('report this answer');
  }

  componentDidMount() {
    this.setState({
      helpfulness: this.props.answerData.helpfulness
    });
  }

  render() {
    return (
      <div className="qaAnswerOptions">
        {/* {this.props.answerData.answerer_name.toLowerCase() === 'seller' ? (<span className="bolded">{this.props.answerData.answerer_name}</span>) : ({this.props.answerData.answerer_name})}, */}
        {`by
        ${this.props.answerData.answerer_name}
        ${this.formatDate(this.props.answerData.date.toString())}`
        }
        <span className="qaDivider">|</span>
        <span className="space">Helpful?</span>
        {!this.state.markedHelpful ? (
          <button className="qaLinkButton qaButton" onClick={this.aHelpful}>Yes </button>
          )
          : '✓'
        }
        ({this.state.helpfulness})
        <span className="qaDivider">|</span>
        {!this.state.reported ? (
          <button className="qaLinkButton qaButton underline" onClick={this.report}>Report</button>
          )
          : 'Reported'
        }
      </div>
    )
  }
}

export default AnswerOptions