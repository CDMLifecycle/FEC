import React from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

var Arrow = (props) => {
  const direction = props.direction;
  const clickFunction = props.clickFunction;
  const icon = direction === 'left' ? <FaChevronLeft /> : <FaChevronRight />;

  return <div onClick={clickFunction}>{icon}</div>;
}

export default Arrow;