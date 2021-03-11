var Size = (props) => {
  return (
    <div id='size'>
      <button onClick={props.toggleSize} className='sizeButton' id='XS' value='XS' key='XS'>XS</button>
      <button onClick={props.toggleSize}  className='sizeButton' value='S' key='S'>S</button >
      <button onClick={props.toggleSize}  className='sizeButton' value='M' key='M'>M</button >
      <button  onClick={props.toggleSize} className='sizeButton' value='L' key='L'>L</button >
      <button  onClick={props.toggleSize} className='sizeButton' value='XL' key='XL'>XL</button >
      <button  onClick={props.toggleSize} className='sizeButton' value='XXL' key='XXL'>XXL</button >
  </div>
  )
}

export default Size;