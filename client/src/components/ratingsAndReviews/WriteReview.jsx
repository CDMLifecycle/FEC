import React from 'react';
import WriteReviewCharacteristics from './WriteReviewCharacteristics.jsx';
import './writeReview.css';
import StarNoFill from './svg/starNoFill.svg';
import StarYellow from './svg/starYellow.svg';

class WriteReview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      characteristicsArray: [],
      selected: false,
      starsArray: new Array(5).fill(false),
      selectedStarsArray: new Array(5).fill(false),
      product_id: '',
      date: '',
      rating: 0,
      summary: '',
      body: '',
      recommend: null,
      name: '',
      email: '',
      photos: [],
      fit: '',
      fitID: '',
      length: '',
      lengthID: '',
      comfort: '',
      comfortID: '',
      quality: '',
      qualityID: '',
      size: '',
      sizeID: '',
      width: '',
      widthID: '',
      postParams: {}
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleBoolean = this.handleBoolean.bind(this);
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
    this.setStar = this.setStar.bind(this);
    this.convertToArray = this.convertToArray.bind(this);
    this.assignRecClass = this.assignRecClass.bind(this);
    this.buildStar = this.buildStar.bind(this);
    this.buildFormInputFields = this.buildFormInputFields.bind(this);
    this.buildYesNoButtons = this.buildYesNoButtons.bind(this);
    this.formInputFields = ['Name', 'Email', 'Summary'];
  }

  handleChange(e) {
    e.stopPropagation();
    if (e.nativeEvent.defaultPrevented === false) {
      if (e.target.name === 'rating') {
        this.setState({
          [e.target.name]: e.target.value,
          selected: true,
          selectedStarsArray: new Array(5).fill(true, 0, e.target.value)
        })
      } else {
        this.setState({
          [e.target.name]: e.target.value
        })
      }
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    let st = this.state;
    this.setState({
      date: new Date(),
      postParams: {
        product_id: Number(st.product_id),
        rating: Number(st.rating),
        summary: st.summary,
        body: st.body,
        recommend: st.recommend,
        name: st.name,
        email: st.email,
        photos: [],
        characteristics: {
          [st.fitID]: Number(st.fit),
          [st.lengthID]: Number(st.length),
          [st.qualityID]: Number(st.quality),
          [st.comfortID]: Number(st.comfort),
          [st.sizeID]: Number(st.size),
          [st.widthID]: Number(st.width)
        }
      }
    },
    () => {
      for (let char in this.state.postParams.characteristics) {
        if (!this.state.postParams.characteristics[char]) {
          delete this.state.postParams.characteristics[char];
        }
      }
      this.props.submitWriteReview(this.state.postParams)
    });
  }

  handleBoolean(e) {
    e.target.value === 'true'
      ? this.setState({ recommend: true })
      : this.setState({ recommend: false });
  }

  componentDidMount() {
    let meta = this.props.productMetadata;
    let metaChar = meta.characteristics;

    this.setState({
      characteristicsArray: this.convertToArray(meta),
      product_id: meta.product_id,
      fitID: metaChar.Fit ? metaChar.Fit.id : null ,
      lengthID: metaChar.Length? metaChar.Length.id : null ,
      qualityID: metaChar.Quality ? metaChar.Quality.id : null ,
      comfortID: metaChar.Comfort ? metaChar.Comfort.id : null,
      sizeID: metaChar.Size ? metaChar.Size.id : null ,
      widthID: metaChar.Width ? metaChar.Width.id : null
    })
  }

  handleMouseEnter(e){
    e.stopPropagation();
    let select = new Array(Number(e.target.getAttribute('value'))).fill(true);
    let unselect = new Array(5 - select.length).fill(false);
    return !this.state.selected
      ? this.setState({ starsArray: select.concat(unselect) })
      : null
  }

  handleMouseLeave(e) {
    !this.state.submited
      ? this.setState({ starsArray: new Array(5).fill(false)})
      : null
  }

  setStar(index) {
    if (this.state.selected) {
      return this.state.selectedStarsArray[index - 1] ? StarYellow : StarNoFill;;
    } else {
      return this.state.starsArray[index - 1] ? StarYellow : StarNoFill;
    }
  }

  convertToArray(meta) {
    return meta
      ? Object.keys(meta.characteristics)
      : null;
  }

  assignRecClass(bool) {
    if (this.state.recommend === false && bool === false) {
      return 'selected'
    } else if (this.state.recommend === true && bool === true) {
      return 'selected'
    } else {
      return 'unselected'
    }
  }

  buildStar(index) {
    return (
      <label onChange={this.handleChange} key={index + 100}>
        <input
          type='radio'
          value={`${index + 1}`}
          name='rating'
          required
        />
        <img
          src={this.setStar(index + 1)}
          value={`${index + 1}`}
          name='rating'
          onMouseEnter={this.handleMouseEnter}
          onMouseLeave={this.handleMouseLeave}
          alt='star'
        />
      </label>
  )}

  buildFormInputFields(inputField, index) {
    let inputLowercase = inputField.toLowerCase();
    return (
      <div key={index + 80}>
        <label
          className='review-input-form'
          htmlFor={inputLowercase}
        >
          {inputField}
          <input
            placeholder={inputField}
            name={inputLowercase}
            value={this.state[inputLowercase]}
            onChange={this.handleChange}
            required
          />
        </label>
      </div>
  )}

  buildYesNoButtons(bool) {
    return (
      <div>
        <label
          className={`wr-rec-radio-${this.assignRecClass(bool)}`}
          htmlFor={`wr-rec-${bool}`}
          onChange={this.handleBoolean}
          value={this.state.recommend}
        >
          <input
            type='radio'
            name='recommend'
            value={`${bool}`}
            required
            id={`wr-rec-${bool}`}
          />
          {bool ? 'Yes' : 'No'}
        </label>
      </div>
    )
  }

  render () {
    return (
      <div id='backdrop-write-review' onClick={this.props.exit} name='backdrop'>
        <div id='write-review-contents'>
          <h3>Submit your review for {this.props.productInfo.name.toUpperCase()} below</h3>
          <div id='form-review-container'>
            <form onSubmit={this.handleSubmit}>
              <div id='review-stars-container'>
                How do you rate this product?
                <div id='star-box'>
                  {Array(5).fill(1).map((item, index) => this.buildStar(index) )}
                </div>
              </div>
              <div className='review-input-container'>
                {this.formInputFields.map((field, index) => this.buildFormInputFields(field, index))}
                <div >
                  <label className='review-input-form' htmlFor='long-form'>
                    Let us know what you think
                    <textarea
                      placeholder='1000 character max'
                      name='body'
                      value={this.state.body}
                      onChange={this.handleChange}
                      id='long-form'
                      required
                    />
                  </label>
                </div>
              </div>
              <div id='would-recommend-container'>
                <h4>Would you recommend this item?</h4>
                  <div id='yes-no-box'>
                    <label id='wr-rec-radio-both'>
                      {this.buildYesNoButtons(true)}
                      {this.buildYesNoButtons(false)}
                    </label>
                  </div>
              </div>
              <div id='characteristics-review-box'>
                <h4>Characteristics</h4>
                <div className='wr-characteristic-container'>
                  {this.state.characteristicsArray.map((character, index) => (
                    <WriteReviewCharacteristics
                      characteristic={character}
                      key={index}
                      handleChange={this.handleChange}
                      state={this.state}
                    />
                  ))}
                  </div>
              </div>
              <div id='modal-btn-box'>
                <button id='exit-write-review' onClick={this.props.exit} name='exit'>Go back</button>
                <button type='submit' id='submit-write-review'>Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default WriteReview;