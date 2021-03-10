import React from 'react';
import {mount, shallow} from 'enzyme';
import ProductComparison from '../../../../client/src/components/relatedProducts/ProductComparison.jsx';
import dummyData from '../../../../client/src/components/relatedProducts/dummydata.js';

it("renders without crashing when passed correct props", () => {
  shallow(<ProductComparison currentProduct={dummyData.curentProductInformation} comparedProduct={dummyData.formattedDefaultProduct} />)
})


