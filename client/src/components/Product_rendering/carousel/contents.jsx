import React,{useState} from 'react';
import CarouselSlide from './CarouselSlide.jsx';
import Arrow from './Arrow.jsx';
import { Slide } from '@material-ui/core';


function Contents(props) {
  const [index, setIndex] = useState(0);
  const content = props.SLIDE_INFO[index];
  const numSlides = props.SLIDE_INFO.length;
  const [slideIn, setSlideIn] = useState(true);
  const [slideDirection, setSlideDirection] = useState('down');
  const onArrowClick = (direction) => {
      const increment = direction === 'left' ? -1 : 1;
      const newIndex = (index + increment + numSlides) % numSlides;

      const oppDirection = direction === 'left' ? 'right' : 'left';
        setSlideDirection(direction);
        setSlideIn(false);

        setTimeout(() => {
            setIndex(newIndex);
            setSlideDirection(oppDirection);
            setSlideIn(true);
        }, 500);
  };
    return (
        <div className='Contents'>
           <Arrow
                direction='left'
                clickFunction={() => onArrowClick('left')}
            />
            <Slide in={slideIn} direction={slideDirection}>
                <div>
                    <CarouselSlide contents={content} />
                </div>
            </Slide>
            <Arrow
                direction='right'
                clickFunction={() => onArrowClick('right')}
            />
        </div>
    );
}

export default Contents;