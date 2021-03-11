import React from 'react';
import {mount, shallow, render} from 'enzyme';
import Size from '../../../../client/src/components/Product_rendering/Size.jsx';
// /Users/liemnguyen/hfso133/Capstone/Fec2/client/src/components/Product_rendering
describe('Size', () => {
  it("renders Size from Product_Detail without crashing", () => {
    shallow(<Size toggleSize={jest.fn()}/>)
  });

  it("should call mock function when button is clicked XS", () => {
    const mockFn = jest.fn();
    const val = shallow( <button onClick={mockFn} className='sizeButton' id='XS' value='XS' key='XS'>XS</button>);

    val.simulate('click');
    expect(mockFn).toHaveBeenCalled();
  });

  it("should call mock function when button is clicked S", () => {
    const mockFn = jest.fn();
    const val = shallow(<button onClick={mockFn}  className='sizeButton' value='S' key='S'>S</button >);

    val.simulate('click');
    expect(mockFn).toHaveBeenCalled();
  });

  it("should call mock function when button is clicked M", () => {
    const mockFn = jest.fn();
    const val = shallow(<button onClick={mockFn}  className='sizeButton' value='M' key='M'>M</button >);

    val.simulate('click');
    expect(mockFn).toHaveBeenCalled();
  });

  it("should call mock function when button is clicked L", () => {
    const mockFn = jest.fn();
    const val = shallow( <button  onClick={mockFn} className='sizeButton' value='L' key='L'>L</button >);

    val.simulate('click');
    expect(mockFn).toHaveBeenCalled();
  });

  it("should call mock function when button is clicked XL", () => {
    const mockFn = jest.fn();
    const val = shallow( <button  onClick={mockFn} className='sizeButton' value='XL' key='XL'>XL</button >);

    val.simulate('click');
    expect(mockFn).toHaveBeenCalled();
  });

  it("should call mock function when button is clicked XXL", () => {
    const mockFn = jest.fn();
    const val = shallow( <button  onClick={mockFn} className='sizeButton' value='XXL' key='XXL'>XXL</button >);

    val.simulate('click');
    expect(mockFn).toHaveBeenCalled();
  });
});