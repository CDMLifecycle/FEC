import React from 'react';

class AnswerOptions extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      reported: false,
      reportText: ''
    }
    this.aHelpful = this.aHelpful.bind(this);
    this.report = this.report.bind(this);
  }

  aHelpful (e) {
    e.preventDefault();
    console.log('this answer is helpful');
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
        by
        {/* {this.props.answerData.answerer_name.toLowerCase() === 'seller' ? (<span className="bolded">{this.props.answerData.answerer_name}</span>) : ({this.props.answerData.answerer_name})}, */}
        {this.props.answerData.answerer_name}
        {this.props.answerData.date}
        <span className="qaDivider">|</span>
         Helpful?
        <button className="helpful qaLinkButton qaButton" onClick={this.aHelpful}>Yes</button> ({this.props.answerData.helpfulness})
        <span className="qaDivider">|</span>
        {!this.state.reported ? (
          <button className="qaLinkButton qaButton" id="reportButton" onClick={this.report}>Report</button>
          ) : 'Reported'}
      </div>
    )
  }
}

export default AnswerOptions