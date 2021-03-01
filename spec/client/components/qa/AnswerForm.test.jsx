import React from 'react';
import {mount, shallow, render} from 'enzyme';
import QAMain from '../../../../client/src/components/qa/QAMain.jsx';

const wrapper = mount(<QAMain />);

describe('<QAMain />', () => {
  test('QAMain contains the QuestionList component', () => {
    expect(wrapper.find(<QAMain />)).toBeTruthy();
  });

});