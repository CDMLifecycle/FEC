import React from 'react';
import {mount, shallow, render} from 'enzyme';
import QAMain from '../../../../client/src/components/qa/QAMain.jsx';
import QuestionList from '../../../../client/src/components/qa/QuestionList.jsx';

const wrapper = mount(<QAMain searchedArr={[{id: 14038, campus: "hr-sfo", name: "Heir Force Ones", slogan: "A sneaker dynasty", description: "Now where da boxes where I keep mine? You should p…an't nothin compare to a fresh crispy white pearl"}]}/>);

describe('Main QA Component', () => {
  test('QAMain contains the QuestionList component', () => {
    expect(wrapper.find(<QuestionList />)).toBeTruthy();
  });

  test('QAMain contains props that are passed in', () => {
    expect(wrapper.contains({id: 14038, campus: "hr-sfo", name: "Heir Force Ones", slogan: "A sneaker dynasty", description: "Now where da boxes where I keep mine? You should p…an't nothin compare to a fresh crispy white pearl"})).toBe(true);
  });


});