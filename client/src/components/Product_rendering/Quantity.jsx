var Quantity = (props) => {

  return (
    <div className='q_c'>
      <button className="qsButtonLeft" onClick={props.quantityDecrease} ><i className="fa fa-minus" aria-hidden="true"></i></button>
      <div className='quantityBox'>{props.quantity}</div>
      <button className="qsButtonRight" onClick={props.quantityIncrease}><i className="fa fa-plus" aria-hidden="true"></i></button>
    </div>
  )
}

export default Quantity;