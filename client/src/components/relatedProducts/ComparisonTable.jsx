import React from 'react';
import './relatedProducts.css';

const ComparisonTable = props => {
  var {tableData} = props;

  return(
    <div className='ComparisonTable'>
      {tableData && tableData.length > 0 ?
        tableData.map((detail, index) =>
          <div className='ComparisonTable-row' key={detail[0]}>{detail.indexOf(1) >= 0 ?
            <span className="material-icons">
            done</span> :
            <span></span>}
            <span key={'characteristic_' + index} className='ComparisonTable-characteristic'>{detail[1] !== null ? detail[0] + ": " + detail[1] : detail[0]}</span>
            <span>{detail.indexOf(2) >= 0 ? <span className="material-icons">
            done</span>: <span></span>}</span>
        </div>
      ) : null}
    </div>
  )
}

export default ComparisonTable;