import React from 'react';

const ComparisonTable = props => {
  var {tableData} = props;

  return(
    <div className='ComparisonTable'>
    {tableData.map((detail) =>
      <div className='ComparisonTable-row' key={detail[0]}>{detail.indexOf(1) >= 0 ? <span className="material-icons">
      done</span>: <span></span>}
      <span>{detail[1] !== null ? detail[0] + ": " + detail[1] : detail[0]}</span>
      <span>{detail.indexOf(2) >= 0 ? <span className="material-icons">
      done</span>: <span></span>}</span>
      </div>
    )}
  </div>
  )
}

export default ComparisonTable;