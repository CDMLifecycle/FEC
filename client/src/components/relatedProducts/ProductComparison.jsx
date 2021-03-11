import react, {useState, useEffect} from 'react';
import ComparisonTable from './ComparisonTable.jsx';
import {replaceEscapeQuotes} from './utility.js';
import {structureTableData} from './helpers.js'
import './relatedProducts.css';

var ProductComparison = (props) => {

  //look at the .details of each product.
  const [tableData, setTableData] = useState(null);

  useEffect(() => {
    structureTableData(props, setTableData);
    // var featureObj = {}
    // for (let obj of props.currentProduct.features) {
    //     featureObj[replaceEscapeQuotes(obj.feature)] = [replaceEscapeQuotes(obj.feature), replaceEscapeQuotes(obj.value), 1]
    // }

    // for (let feat of props.comparedProduct.features) {
    //   if (featureObj[replaceEscapeQuotes(feat.feature)] === undefined) {
    //     featureObj[replaceEscapeQuotes(feat.feature)] = [replaceEscapeQuotes(feat.feature), replaceEscapeQuotes(feat.value), 2]
    //   } else {
    //     featureObj[replaceEscapeQuotes(feat.feature)].push(2);
    //   }
    // setTableData(Object.values(featureObj))
    // }
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