import React from 'react';
import {shallow} from 'enzyme';
import AddToLooksCard from '../../../../client/src/components/relatedProducts/AddToLooks.jsx';

it("renders an AddToLooksCard without crashing", () => {
  shallow(<AddToLooks/>)
})