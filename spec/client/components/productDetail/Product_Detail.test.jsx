import React from 'react';
import {mount, shallow, render} from 'enzyme';
import Product_Detail from '../../../../client/src/components/Product_rendering/Product_Detail.jsx';

var wrapper;
const user = { //camo info
  productID: "14034",
  searched: "camo",
  searchedArr: [{"id":14034,"campus":"hr-sfo","name":"Camo Onesie","slogan":"Blend in to your crowd","description":"The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.","category":"Jackets","default_price":"140.00","created_at":"2021-02-23T02:49:02.833Z","updated_at":"2021-02-23T02:49:02.833Z"}],
};

beforeEach( () => {
  wrapper = shallow(<Product_Detail productID={user.productID} searched={user.searched} searchedArr={user.searchedArr} />)
  return wrapper;
});

describe('Product_Detail', () => {
  const user = {
    productID: "1234",
    searched: "hi",
    searchedArr: {hi: '1234'},
  };

  it("renders Product_Detail without crashing", () => {
    shallow(<Product_Detail productID={user.productID} searched={user.searched} searchedArr={user.searchedArr} />)
  });

  it('should render one descriptionBox', () => {
    expect(wrapper.find('div.descriptionBox')).toHaveLength(1);
  });
  it('should render one CheckoutBox', () => {
    expect(wrapper.find('div.boxCheckout')).toHaveLength(1);
  });
  it('should render one slogan text', () => {
    expect(wrapper.find('div.sloganText')).toHaveLength(1);
  });
  it('should render one Description text', () => {
    expect(wrapper.find('div.descriptionText')).toHaveLength(1);
  });
  it('should render one Product Name', () => {
    expect(wrapper.find('div.productName')).toHaveLength(1);
  });

  it('should start index 0', () => {
    expect(wrapper.state('index')).toEqual(0);

  });

  it('should move index to 1', () => {
    var found = wrapper.find('button.rightScroller');
      setTimeout( () => {
        found.simulate('click', {preventDefault: () => {}});
        expect(wrapper.state('index')).toEqual(1);
      }, 500);
  });

  it('should move index to 5', () => {
    var found = wrapper.find('button.leftScroller');
      setTimeout( () => {
        found.simulate('click', {preventDefault: () => {}});
        expect(wrapper.state('index')).toEqual(5);
      }, 500);
  });

  it('should make fullscreen', () => {
    var found = wrapper.find('button#fs');
      setTimeout( () => {
        found.simulate('click', {preventDefault: () => {}});
        expect(wrapper.state('fullscreen')).toEqual(true);
      }, 500);
  });
  it('should make half', () => {
    var found = wrapper.find('LargePhoto');
      setTimeout( () => {
        found.simulate('click', {preventDefault: () => {}});
        expect(wrapper.state('hf')).toEqual(true);
      }, 500);
  });

  it('should call getStyle', () => {
    const mockGetStyle = jest.fn();
    const wrap = mount(<Product_Detail productID={user.productID} searched={user.searched} searchedArr={user.searchedArr} />);
    const instance = wrap.instance();
    instance.getStyle = mockGetStyle;

    instance.getStyle(user.productID);
    expect(mockGetStyle).toBeCalled();
  });

  it('should call sizeSet', () => {
    const mockGetStyle = jest.fn();
    const wrap = mount(<Product_Detail productID={user.productID} searched={user.searched} searchedArr={user.searchedArr} />);
    const instance = wrap.instance();

    instance.sizeSet({target: {value: 'S'}});
    expect(wrapper.state('quantity')).toBe('S');
  });

  it('should call colorSet', () => {
    const wrap = mount(<Product_Detail productID={user.productID} searched={user.searched} searchedArr={user.searchedArr} />);
    const instance = wrap.instance();

    instance.colorSet('blue');
    expect(wrapper.state('color')).toBe('blue');
  });

  it('should call fullscreen', () => {
    const wrap = mount(<Product_Detail productID={user.productID} searched={user.searched} searchedArr={user.searchedArr} />);
    const instance = wrap.instance();

    instance.fullscreen();
    expect(wrapper.state('fullscreen')).toBe('false');
  });

  it('should call halfscreen', () => {
    const wrap = mount(<Product_Detail productID={user.productID} searched={user.searched} searchedArr={user.searchedArr} />);
    const instance = wrap.instance();

    instance.halffullscreen();
    expect(wrap.instance().halffullscreen()).toHaveBeenCalled();
  });

  it('should call toggleSize', () => {
    const wrap = mount(<Product_Detail productID={user.productID} searched={user.searched} searchedArr={user.searchedArr} />);
    const instance = wrap.instance();

    instance.toggleSize();
    expect(wrap.instance().toggleSize()).toHaveBeenCalled();
  });

  it('should call quantityIncrease', () => {
    const wrap = mount(<Product_Detail productID={user.productID} searched={user.searched} searchedArr={user.searchedArr} />);
    const instance = wrap.instance();

    instance.quantityIncrease();
    expect(wrap.instance().quantityIncrease()).toHaveBeenCalled();
  });

  it('should call quantityDecrease', () => {
    const wrap = mount(<Product_Detail productID={user.productID} searched={user.searched} searchedArr={user.searchedArr} />);
    const instance = wrap.instance();

    instance.quantityDecrease();
    expect(wrap.instance().quantityDecrease()).toHaveBeenCalled();
  });



});


