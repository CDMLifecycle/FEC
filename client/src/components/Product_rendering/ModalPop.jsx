import React from 'react';

class ModalPop extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      input: '',
      value: '',
    }
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.backgroundColor = this.backgroundColor.bind(this);
  }

  onChange(event) {
    event.preventDefault();
    this.setState({[event.target.name] : event.target.value});
  }
  onSubmit(event) {
    event.preventDefault();
    this.props.submit(this.state.value, this.state.input);
    this.props.clicked();
  }
  backgroundColor(event) {
    if(event.target.tagName === 'DIV') {
      this.props.clicked();
    }
  }

  render() {
    return (
      <div className='modalBackground' id='modal' onClick={this.backgroundColor}>
        <form onSubmit={this.onSubmit} className='ProductModal'>
          <button className='xBox'>X</button>
          Name: <input name='input' className='ModalContents' onChange={this.onChange} value={this.state.input}></input>
          Email: <input className='ModalContents' name='value' onChange={this.onChange} value={this.state.value}></input>
          <button className='leftright' onClick={this.onSubmit}>OK</button>
        </form>
      </div>
    )
  }
}

export default ModalPop;