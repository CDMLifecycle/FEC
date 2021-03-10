import React from 'react'
import {mount, shallow} from 'enzyme'
import ComparisonTable from '../../../../client/src/components/relatedProducts/ComparisonTable.jsx';
import dummyData from '../../../../client/src/components/relatedProducts/dummydata.js'

it("renders ComparisonTable without crashing", () => {
  shallow(<ComparisonTable  tableData={[]}/>)
})