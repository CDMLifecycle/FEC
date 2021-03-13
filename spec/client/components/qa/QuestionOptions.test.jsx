import React from 'react';
import {mount, shallow, render} from 'enzyme';
import QuestionOptions from '../../../../client/src/components/qa/QuestionOptions.jsx';

const wrapper = mount(<QuestionOptions />);

describe('Testing the Answers', () => {

  test('Opens modal to add an answer', () => {
    wrapper.find('button.qaButton').at(1).simulate('click');
    expect(wrapper.state().modal).toBe(true);
  });

  test('The helpful button can only be clicked once', () => {
    wrapper.find('.helpful').simulate('click')
    expect(wrapper.state().markedHelpful).toBe(true);
  })

});