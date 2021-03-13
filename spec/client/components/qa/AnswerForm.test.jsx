import React from 'react';
import {mount, shallow, render} from 'enzyme';
import QuestionOptions from '../../../../client/src/components/qa/QuestionOptions.jsx';
import AnswerForm from '../../../../client/src/components/qa/AnswerForm.jsx'

const component = mount(<AnswerForm />);
const wrapper = mount(<QuestionOptions />);

describe('Answer Form', () => {

  test('The modal opens and closes', () => {
    wrapper.find('button.qaButton').at(1).simulate('click');
    expect(wrapper.state().modal).toBe(true);
    wrapper.find('.close').simulate('click')
    expect(wrapper.state().modal).toBe(false);
  });

  test('Inputs take text', () => {
    const component = mount(<AnswerForm />);
    const wrapper = mount(<QuestionOptions />);
    wrapper.find('button.qaButton').at(1).simulate('click');
    wrapper.find('.qInput').at(0).simulate('change', {target: {value: 'Yes'}});
    wrapper.find('.qInput').at(1).simulate('change', {target: {value: 'Bob'}});
    wrapper.find('.qInput').at(2).simulate('change', {target: {value: 'abc@123.com'}});
    wrapper.find('.submitAnswer').simulate('click');
    component.setState({
      answer: 'Yes',
      qInput: 'Bob',
      email: 'abc@123.com'
    })
    expect(component.state().form.answer).toBe("");
  });

});

