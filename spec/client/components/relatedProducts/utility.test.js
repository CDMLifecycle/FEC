import {mount, shallow} from 'enzyme'
import {replaceEscapeQuotes} from '../../../../client/src/components/relatedProducts/utility.js';

it('it should run replaceEscapeQuotes on an empty string', () => {
  var testStr = '';
  expect(replaceEscapeQuotes(testStr)).toEqual('');
})

// it('replaceEscapeQuotes should remove any escape characters from an input string', () => {
//   var testStr = "michael'\ smith'\ was here";
//   expect(utility.replaceEscapeQuotes(testStr)).to.equal("michael smith was here");
// })