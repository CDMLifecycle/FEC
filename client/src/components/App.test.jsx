import React from 'react'
import {mount, shallow} from 'enzyme'
import App from './App.jsx';

const wrapper = mount(<App />);


test('App contains a form element', () => {
  expect(wrapper.find('form')).toExist();
});
