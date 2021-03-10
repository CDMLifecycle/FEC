var stickyButton = () => {
  function toTop() {
    var checkoutButton = document.getElementById('checkout');
    checkoutButton.scrollIntoView(false);
  }
  return(
    <button className='scrollup' onClick={(event) => {
      toTop()}}>
      <i className="fa fa-chevron-up" style={{fontSize:'20px'}}></i>
    </button>
  )
}

export default stickyButton;