import react, {useState, useEffect} from 'react';

var ProductComparison = (props) => {

  //look at the .details of each product.
  const [tableData, setTableData] = useState(null);

  useEffect(() => {
    var featureObj = {}
    for (let feature of props.currentProduct.features) {
      featureObj[feature.feature] = [feature.value, 1]
    }

    for (let feat of props.comparedProduct.features) {
      if (featureObj[feat.feature] === undefined) {
        featureObj[feat.feature] = [feat.value, 2]
      } else {
        featureObj[feat.feature].push(2);
      }
    setTableData(featureObj)
    }
  }, [])


  return (
    <div className='ProductComparison'>
      <h3>Product Comparison</h3>
      <table>
        <thead>
          <tr>
            <th>{props.currentProduct.name}</th>
            <th>Characteristics</th>
            <th>{props.comparedProduct.name}</th>
          </tr>
        </thead>
      </table>
    </div>
  )
}

export default ProductComparison