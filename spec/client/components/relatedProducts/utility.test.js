import {mount, shallow} from 'enzyme'
import {replaceEscapeQuotes, makePhotoMatrix} from '../../../../client/src/components/relatedProducts/utility.js';

describe('replaceEscapeQuotes', () => {
   it('replaceEscapeQuotes should remove any escape characters from an input string', () => {
     var testStr = "michael'\ smith'\ was here";
     expect(replaceEscapeQuotes(testStr)).toEqual("michael smith was here");
  });

  it('it should run replaceEscapeQuotes on an empty string', () => {
    var testStr = '';
    expect(replaceEscapeQuotes(testStr)).toEqual('');
  })
})



describe('makePhotoMatrix', ()=> {
  var testArray = ["a", "b", "c", "d", "e", "f"]
  it('creates an array of arrays', () => {
    let result = makePhotoMatrix(testArray);
    let specificInstance = result[0];
    expect(specificInstance).toHaveLength(4);
  })
})
