import React from 'react';
// import $ from 'jquery';

class AnswerOptions extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      reported: false,
      reportText: ''
    }
    this.aHelpful = this.aHelpful.bind(this);
    this.report = this.report.bind(this);
    // this.formatDate = this.formatDate.bind(this);
  }

  aHelpful (e) {
    e.preventDefault();
    // put request
    console.log('this answer is helpful');
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
    })
    console.log('report this answer');
  }

  componentDidMount() {
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
         Helpful?
        <button className="underline qaLinkButton qaButton" onClick={this.aHelpful}>Yes</button> ({this.props.answerData.helpfulness})
        <span className="qaDivider">|</span>
        {!this.state.reported ? (
          <button className="qaLinkButton qaButton underline" onClick={this.report}>Report</button>
          ) : 'Reported'}
      </div>
    )
  }
}

export default AnswerOptions