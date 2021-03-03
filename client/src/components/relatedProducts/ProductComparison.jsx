import react, {useState, useEffect} from 'react';

var ProductComparison = (props) => {

  //look at the .details of each product.
  const [tableData, setTableData] = useState(null);

  useEffect(() => {

  }, [])


  return (
    <div className='ProductComparison'>
     <table>
       <tr>
         <th>{props.currentProduct.name}</th>
         <th>Characteristics</th>
         <th>{props.comparedProduct.name}</th>
       </tr>
     </table>
    </div>
  )
}

export default ProductComparison