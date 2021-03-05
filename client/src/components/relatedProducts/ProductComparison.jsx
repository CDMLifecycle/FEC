import react, {useState, useEffect} from 'react';
import ComparisonTable from './ComparisonTable.jsx';

var ProductComparison = (props) => {

  //look at the .details of each product.
  const [tableData, setTableData] = useState(null);

  useEffect(() => {
    var featureObj = {}
    for (let obj of props.currentProduct.features) {
        featureObj[obj.feature] = [obj.feature, obj.value , 1]
    }

    for (let feat of props.comparedProduct.features) {
      if (featureObj[feat.feature] === undefined) {
        featureObj[feat.feature] = [feat.feature, feat.value, 2]
      } else {
        featureObj[feat.feature].push(2);
      }
    setTableData(Object.values(featureObj))
    }
  }, [])

  //need an array of data per char. Need the


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