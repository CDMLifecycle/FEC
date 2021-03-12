import react, {useState, useEffect} from 'react';
import ComparisonTable from './ComparisonTable.jsx';
import {replaceEscapeQuotes} from './utility.js';
import {structureTableData} from './helpers.js'
import './relatedProducts.css';

var ProductComparison = (props) => {

  const [tableData, setTableData] = useState(null);

  useEffect(() => {
    structureTableData(props, setTableData);
  }, [])

  return (
    <div onClick={props.closeComparisonModel} className='ProductComparison-overlay'>
      <div className='ProductComparison'>
        <h4>PRODUCT COMPARISON</h4>
        <div className='ProductComparison-headings'>
          <span>{props.currentProduct.name.toUpperCase()}</span>
          <span></span>
          <span>{props.comparedProduct.name.toUpperCase()}</span>
        </div>
        {tableData ? <ComparisonTable tableData={tableData}/> : null}
      </div>
    </div>
  )
}

export default ProductComparison