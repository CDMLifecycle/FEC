import React from 'react';
import {mount, shallow, render} from 'enzyme';
import Social from '../../../../client/src/components/Product_rendering/Social_Media.jsx';
// /Users/liemnguyen/hfso133/Capstone/Fec2/client/src/components/Product_rendering
describe('Social_Media', () => {
  it("renders Social_Media from Product_Detail without crashing", () => {
    shallow(<Social />)
  });
  it("should call mock function when button is clicked fb", () => {
    const mockFn = jest.fn();
    const val = shallow(<button className='socialButton' id='fb' onClick={mockFn}>
    <img src='https://image.flaticon.com/icons/png/512/124/124010.png' width='20px' height='20px'></img>
  </button>);

    val.simulate('click');
    expect(mockFn).toHaveBeenCalled();
  })

  it("should call mock function when button is clicked twitter", () => {
    const mockFn = jest.fn();
    const val = shallow(<button className='socialButton' onClick={mockFn}><img src='https://louisville.edu/philosophy/images/icons-for-footer/twittericon2.png/image' width='20px' height='20px'></img></button>);

    val.simulate('click');
    expect(mockFn).toHaveBeenCalled();
  })

  it("should call mock function when button is clicked pinterest", () => {
    const mockFn = jest.fn();
    const val = shallow(<button className='socialButton' onClick={mockFn}><img src='https://paintestimating.com/wp-content/uploads/2018/07/pinterest-icon-297x300.png' width='20px' height='20px'></img></button>);

    val.simulate('click');
    expect(mockFn).toHaveBeenCalled();
  })
});