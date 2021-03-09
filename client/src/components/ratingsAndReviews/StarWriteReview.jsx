import React from 'react';

class StarWriteReview extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      selected: false,
      starsArray: [false, false, false, false, false]
    }
    // this.setInputs = this.setInputs.bind(this);
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
    this.selectBtn = this.selectBtn.bind(this);
  }


  handleMouseEnter(e){
    let select = new Array(Number(e.target.value)).fill(true);

    let unselect = new Array(5 - select.length).fill(false);

    this.setState({
      starsArray: select.concat(unselect)
    })
  }

  handleMouseLeave(e) {
    !this.state.submited
      ? this.setState({ starsArray: new Array(5).fill(false)})
      : null
  }

  selectBtn(e) {
    this.props.handleChange(e)
    this.setState({ selected: true })
  }

  // setInputs(array) {
  //   console.log(array)
  //   // let array = Object.values(state)
  //   array.map((item, index) => {
  //    return (item
  //     ? (<input
  //       type='radio'
  //       value={index + 1}
  //       name='rating'
  //       className='star-unselected'
  //       onMouseEnter={this.handleMouseEnter}
  //       onMouseLeave={this.handleMouseLeave}
  //       required
  //     >
  //      {index + 1}
  //      </input>)
  //     : (<input
  //       type='radio'
  //       value={index + 1}
  //       name='rating'
  //       className='star-selected'
  //       onMouseEnter={this.handleMouseEnter}
  //       onMouseLeave={this.handleMouseLeave}
  //       required>
  //       {index + 1}</input>)
  //   )})
  // }


  render() {
    // console.log(this.setArray(this.state))
    return(
      <div id='overall-rating'>
        <div
        onChange={this.selectBtn}
        value={this.state.rating}
        id='ratings-values'>

          <label
            onChange={this.selectBtn}
            value={this.state.rating}
            id='ratings-values'
          >
            {/* {this.setInputs(this.state.starsArray)} */}
            <input
              type='radio'
              value={1}
              name='rating'
              className='star-selected'
              onMouseEnter={this.handleMouseEnter}
              onMouseLeave={this.handleMouseLeave}
              required
            />1
            <input
              type='radio'
              value={2}
              name='rating'
              className='star-selected'
              onMouseEnter={this.handleMouseEnter}
              onMouseLeave={this.handleMouseLeave}
            />2
            <input
              type='radio'
              value={3}
              name='rating'
              className='star-selected'
              onMouseEnter={this.handleMouseEnter}
              onMouseLeave={this.handleMouseLeave}
            />3
            <input
              type='radio'
              value={4}
              name='rating'
              className='star-selected'
              onMouseEnter={this.handleMouseEnter}
              onMouseLeave={this.handleMouseLeave}
            />4
            <input
              type='radio'
              value={5}
              name='rating'
              className='star-selected'
              onMouseEnter={this.handleMouseEnter}
              onMouseLeave={this.handleMouseLeave}
            required/>5
          </label>
          </div>
      </div>
    )
  }

}


export default StarWriteReview;
