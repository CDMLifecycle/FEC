import React from 'react';
import Marquee from 'react-fast-marquee';
class Landing extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      input: '',
      searched: '',
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({input: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.handleSubmitForm(this.state.input);
    this.setState({searched: this.state.input, input: ''});
    this.props.handleSubmit(event);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <Marquee speed={100} direction='right' className='topScroller'>
          <img src='https://wallpapercave.com/wp/wp2702157.jpg' width='auto' height='200'></img>
          <img src='https://pbs.twimg.com/profile_images/1198790230213574656/bY9wyrTr.jpg' width='auto' height='200'></img>
          <img src='https://static.highsnobiety.com/thumbor/oi3mylAd6hKjLQD0mjqWVqopK6Y=/1600x960/static.highsnobiety.com/wp-content/uploads/2014/04/the-inspirations-behind-20-of-the-most-well-known-logos-in-high-fashion-08.jpg' width='auto' height='200'></img>
          <img src='https://cdn.logojoy.com/wp-content/uploads/2018/05/30143356/127-768x591.png' width='auto' height='200'></img>
          <img src='https://media.tenor.com/images/d2fad43acf16946d2cc229d6159aae2e/tenor.png' width='auto' height='200'></img>
          <img src='https://i.pinimg.com/originals/64/7b/9c/647b9ca662aa65341694a766be7ff821.png' width='auto' height='200'></img>
          <img src='https://www.ethicaloo.com/wp-content/uploads/2017/01/Where-are-diamond-supply-co-clothes-made.jpg' width='auto' height='200'></img>
        </Marquee>


        <div className='Landing' >
          <input className='searchBarLanding' value={this.state.input} onChange={this.handleChange} placeholder='Search'></input>
        </div>


        <Marquee speed={100} className='topScroller'>
          <img src='https://wallpapercave.com/wp/wp2702157.jpg' width='auto' height='200'></img>
          <img src='https://pbs.twimg.com/profile_images/1198790230213574656/bY9wyrTr.jpg' width='auto' height='200'></img>
          <img src='https://static.highsnobiety.com/thumbor/oi3mylAd6hKjLQD0mjqWVqopK6Y=/1600x960/static.highsnobiety.com/wp-content/uploads/2014/04/the-inspirations-behind-20-of-the-most-well-known-logos-in-high-fashion-08.jpg' width='auto' height='200'></img>
          <img src='https://cdn.logojoy.com/wp-content/uploads/2018/05/30143356/127-768x591.png' width='auto' height='200'></img>
          <img src='https://i.ebayimg.com/images/g/8-8AAOSwh-1W5Dd2/s-l300.jpg' width='auto' height='200'></img>
          <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Gucci_logo.svg/1200px-Gucci_logo.svg.png' width='auto' height='200'></img>
          <img src='https://images.hugoboss.com/is/image/boss/logo_social_sharing?$social_sharing$' width='auto' height='200'></img>
        </Marquee>
      </form>
    )
  }
}

export default Landing;