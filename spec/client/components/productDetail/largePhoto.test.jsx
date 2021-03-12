import React from 'react';
import {mount, shallow, render} from 'enzyme';
import LargePhoto from '../../../../client/src/components/Product_rendering/largePhoto.jsx';
import Magnifier from 'react-magnifier';

// /Users/liemnguyen/hfso133/Capstone/Fec2/client/src/components/Product_rendering

describe('LargePhotos', () => {
  const props = {
    photo: 'https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80'
  }
  it("renders left transition", () => {
    shallow(<LargePhoto photo={'https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80'} fullscreen={false}  direction={'left'}/>)
  });
  it("renders right transition", () => {
    shallow(<LargePhoto photo={props.photo} fullscreen={false}  direction={'right'}/>);
  });
  it("renders no transition", () => {
    shallow(<LargePhoto photo={props.photo} fullscreen={false}  direction={''}/>);
  });
});