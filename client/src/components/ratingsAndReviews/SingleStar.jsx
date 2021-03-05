import React from 'react';
import { FaStar } from 'react-icons/fa';
let star = [];

const FullStar = () => (
  <div style={{position:'relative'}}>
    <FaStar className='star' />
    <FaStar className='fill' />
  </div>
)

const HalfStar = () => (
  <div>
    <div style={yellow}></div>
    <FaStar style={halfStyle}/>
  </div>
)

const SingleStar = ({avgQtr}) => (
  <div>
    <h6>How many stars? {avgQtr}</h6>
    <FullStar className='star outline'/>
    <HalfStar />
  </div>
)

const halfStyle = {
  zIndex: 1,
  color: 'red'
}

const yellow = {
  backgroundColor: 'yellow'
}
export default SingleStar;