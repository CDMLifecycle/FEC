import React from 'react';
import axios from 'axios';
import {mount, shallow} from 'enzyme';
import dummyData from './reviewsDummyData.js';
import Slider from '../../../../client/src/components/ratingsAndReviews/Slider.jsx';
import DistributionFilter from '../../../../client/src/components/ratingsAndReviews/DistributionFilter.jsx';



describe('<DistributionFilter />', () => {

  it('should render 5 bars', () => {

    const wrapper = shallow(<DistributionFilter productMetadata={dummyData.metadataExt}/>);

    expect(wrapper.find(Slider)).toHaveLength(5);

  })
})