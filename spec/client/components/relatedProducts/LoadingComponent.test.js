import React from 'react'
import {mount, shallow} from 'enzyme'
import LoadingComponent from '../../../../client/src/components/relatedProducts/LoadingComponent.jsx';

it("renders a Loading Component without crashing", () => {
  shallow(<LoadingComponent/>)
})