import React from 'react';
import AnswerOptions from './AnswerOptions.jsx';

class AnswerItem extends React.Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }

  render() {
    return (
      <div className="qaAnswerList">
        <div className="flexRow">
          <div>A: </div>
          <div className="qaAnswerBody"> {this.props.answer.body}</div>
          </div>
          {this.props.answer.photos.length > 0 ?
          <div className="qa_ImgContainer">
            {this.props.answer.photos.map((image) => {
              console.log(image)
              return <img className="qa_Img" key={image} src={`${image}`}></img>
            })}
          </div>
            : (null)
          }
        <AnswerOptions answerData={this.props.answer}/>
      </div>
    )
  }
}

export default AnswerItem