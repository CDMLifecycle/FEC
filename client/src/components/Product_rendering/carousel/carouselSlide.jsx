import React from 'react';
import { Card, makeStyles } from '@material-ui/core';

var CarouselSlide = (props) => {
    var func = props.contents ?  <img src={props.contents.photos[0].url}></img> : <div></div>
    return (
        <Card className='card' >
            {func}
        </Card>
    );
}
export default CarouselSlide;