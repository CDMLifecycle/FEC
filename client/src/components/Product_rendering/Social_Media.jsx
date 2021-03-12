import React from 'react';
import ModalPop from './ModalPop.jsx';
class Social_Media extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      clicked: false,
      name: '',
      email: ''
    }
    this.onClick = this.onClick.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(val, name) {
    event.preventDefault();
    this.setState({email: val, name: name});
  }
  onClick() {
    if(this.state.clicked) {
      this.setState({clicked: !this.state.clicked});
      document.getElementById('modal').style.display = 'hidden';
    } else {
      this.setState({clicked: !this.state.clicked});
      setTimeout( () => document.getElementById('modal').style.display = 'block', 100);
    }
  }
  render() {
    return(
      <div className='socialContainer'>
          {this.state.clicked ? <ModalPop clicked={this.onClick} submit={this.onSubmit}/> : <div></div>}
        <button className='socialButton' id='fb' onClick={this.onClick}>
          <img src='https://image.flaticon.com/icons/png/512/124/124010.png' width='20px' height='20px'></img>
        </button>
        <button className='socialButton' onClick={this.onClick}><img src='https://louisville.edu/philosophy/images/icons-for-footer/twittericon2.png/image' width='20px' height='20px'></img></button>
        <button className='socialButton' onClick={this.onClick}><img src='https://paintestimating.com/wp-content/uploads/2018/07/pinterest-icon-297x300.png' width='20px' height='20px'></img></button>
      </div>
    )
  }
};

export default Social_Media;