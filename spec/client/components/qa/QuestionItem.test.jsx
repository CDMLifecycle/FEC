import React from 'react';
import {mount, shallow, render} from 'enzyme';
import QuestionList from '../../../../client/src/components/qa/QuestionList.jsx';
import QuestionItem from '../../../../client/src/components/qa/QuestionItem.jsx';

const wrapper = mount(
  <QuestionItem productName={"camo onesie"} q={{
    "question_id": 38,
    "question_body": "How long does it last?",
    "question_date": "2019-06-28T00:00:00.000Z",
    "asker_name": "funnygirl",
    "question_helpfulness": 2,
    "reported": false,
    "answers": {
      70: {
        "id": 70,
        "body": "Some of the seams started splitting the first time I wore it!",
        "date": "2019-11-28T00:00:00.000Z",
        "answerer_name": "sillyguy",
        "helpfulness": 6,
        "photos": [],
      },
      78: {
        "id": 78,
        "body": "9 lives",
        "date": "2019-11-12T00:00:00.000Z",
        "answerer_name": "iluvdogz",
        "helpfulness": 31,
        "photos": [],
      }
    }
  }} key={39} />
)

describe('Question Form', () => {
  test('The question form opens', () => {
    expect(wrapper.find(<QuestionItem />)).toBeTruthy();
  });
})