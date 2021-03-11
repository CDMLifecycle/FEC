import React from 'react';
import {mount, shallow, render} from 'enzyme';
import RenderImages from '../../../../client/src/components/Product_rendering/renderImages.jsx';
// /Users/liemnguyen/hfso133/Capstone/Fec2/client/src/components/Product_rendering
const photos = [{
  photos: [{url: 'https://api.time.com/wp-content/uploads/2019/08/better-smartphone-photos.jpg'}, {url: 'https://api.time.com/wp-content/uploads/2019/08/better-smartphone-photos.jpg'}, {url: 'https://api.time.com/wp-content/uploads/2019/08/better-smartphone-photos.jpg'}, {url: 'https://api.time.com/wp-content/uploads/2019/08/better-smartphone-photos.jpg'}]
}]

describe('renderImages', () => {
  it("renders renderImages from Product_Detail without crashing", () => {
    shallow(<RenderImages changeLarge={jest.fn()} photos={photos}/>)
  });
});