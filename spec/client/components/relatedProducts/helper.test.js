import {
  scrollCardByWidth,
  checkSession,
  addToLooksSession,
  removeFromLooksSession,
  structureTableData,
  checkCardAction
} from '../../../../client/src/components/relatedProducts/helpers.js';
import dummyData from '../../../../client/src/components/relatedProducts/dummydata.js';

describe('checkCardAction', () => {
  it('it returns undefined when not passed props', () => {

    expect(checkCardAction({a: 1})).toEqual(undefined);
  })
  it('it returns a string when given current props', () => {
   var test = {removeFromLooks: 'str'}
    expect(typeof checkCardAction(test)).toBe('string');
  })
})

describe('structure table data', () => {
  var count = 0
  var helper = (data) => count++;
  var testfn = (data) => data
  var testProps = {
    currentProduct: dummyData.formattedDefaultProduct,
    comparedProduct: dummyData.formattedDefaultProduct
  }
  it('passes data to a fn passed as an argument', () => {
    var testResult = structureTableData(testProps, helper);
    expect(count).toBeGreaterThan(0);
  })
  it('produces an array of results that is passed to a passed in function', () => {
    var arrayTest = structureTableData(testProps, testfn);
    expect(typeof arrayTest).toBe('object');
  })
})

describe('scrollCardWidth', () => {

})