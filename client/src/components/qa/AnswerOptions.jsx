import React from 'react';

class AnswerOptions extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

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
    console.log('report this answer');
  }

  render() {
    return (
      <div className="qaAnswerOptions">
        by Username, Jan 1, 2021
        <span className="qaDivider">|</span>
         Helpful?
        <button className="helpful qaLinkButton" onClick={this.aHelpful}>Yes</button> (#)
        <span className="qaDivider">|</span>
        <button className="qaLinkButton" id="reportButton" onClick={this.report}>Report</button>
      </div>
    )
  }
}

export default AnswerOptions