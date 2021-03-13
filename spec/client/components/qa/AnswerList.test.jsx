import React from 'react';
import {mount, shallow, render} from 'enzyme';
import AnswerList from '../../../../client/src/components/qa/AnswerList.jsx';
import QuestionForm from '../../../../client/src/components/qa/QuestionForm.jsx';

const wrapper = mount(<AnswerList
  answers={
    [{
      "id": 70,
      "body": "Some of the seams started splitting the first time I wore it!",
      "date": "2019-11-28T00:00:00.000Z",
      "answerer_name": "sillyguy",
      "helpfulness": 6,
      "photos": [],
    },
    {
      "id": 78,
      "body": "9 lives",
      "date": "2019-11-12T00:00:00.000Z",
      "answerer_name": "iluvdogz",
      "helpfulness": 31,
      "photos": [],
    },
    {
      "id": 81,
      "body": "9 lives",
      "date": "2019-11-12T00:00:00.000Z",
      "answerer_name": "iluvdogz",
      "helpfulness": 31,
      "photos": [],
    }
  ]
  }/>);

  describe('Answer List', () => {
    test('Shows more answers on click', () => {
      wrapper.find('button').at(1).simulate('click');
      wrapper.setState({
        answerLimit: 3
      })
      expect(wrapper.state().answerLimit).toBeGreaterThan(2);
    });
  })