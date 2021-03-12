import { Rating } from '@material-ui/lab';
var Ratings = (props) => {
  return (
    <div className='reviews'>
      <Rating value={props.rating}
        precision={0.25}
        max={5}
        name="unique-rating"
        readOnly
      />
    </div>
  )
}

export default Ratings;