import rfdc from 'rfdc';
import {replaceEscapeQuotes} from './utility.js';

var checkCardAction = (props) => {
  var cardAction;
  if (props.removeFromLooks) {
    cardAction = props.removeFromLooks;
  } else if (props.compareProducts) {
    cardAction = props.compareProducts;
  }
  return cardAction;
}

var scrollCardByWidth = (direction, width, carouselRef, setIndexFn, cardIndex) => {
  var amount;
 width !== null ? amount = width : amount = 350;
  if (direction === 'back') {
    carouselRef.current.scrollBy((-amount), 0);
    setIndexFn(cardIndex - 1);
  } else if (direction === 'forward') {
    carouselRef.current.scrollBy(amount, 0);
    setIndexFn(cardIndex+1);
  }
}

var checkSession = (props, setSessionFn) =>{
  var sessionLooks = props.getLooksInSession();
  if (sessionLooks && sessionLooks.length && sessionLooks.length > 0) {
    setSessionFn(sessionLooks);
  }
}

var addToLooksSession = (props, currentLooksArray, setCurrentLooksArray, currentProduct) => {
  if (currentLooksArray.length > 0) {
    var clone = rfdc();
    for (let product of currentLooksArray) {
      if (product.id === props.currentProductId) {
        return;
      }
    }
    var looksCopy = clone(currentLooksArray);
    looksCopy.unshift(currentProduct);
    setCurrentLooksArray(looksCopy);
    window.sessionStorage.removeItem('Looks');
    props.updateLooksInSession(looksCopy);
  } else {
    setCurrentLooksArray([currentProduct])
    window.sessionStorage.removeItem('Looks');
    props.updateLooksInSession([currentProduct]);
  }
}

var removeFromLooksSession = (id, currentLooksArray, setCurrentLooksArray) => {
  var updatedLooks = currentLooksArray.filter((product) => product.id !== id);
  setCurrentLooksArray(updatedLooks);
  window.sessionStorage.removeItem('Looks');
  window.sessionStorage.setItem('Looks', JSON.stringify(updatedLooks));
}

var structureTableData = (props, setStateTableData) => {
  var featureObj = {}
    for (let obj of props.currentProduct.features) {
        featureObj[replaceEscapeQuotes(obj.feature)] = [replaceEscapeQuotes(obj.feature), replaceEscapeQuotes(obj.value), 1]
    }

    for (let feat of props.comparedProduct.features) {
      if (featureObj[replaceEscapeQuotes(feat.feature)] === undefined) {
        featureObj[replaceEscapeQuotes(feat.feature)] = [replaceEscapeQuotes(feat.feature), replaceEscapeQuotes(feat.value), 2]
      } else {
        featureObj[replaceEscapeQuotes(feat.feature)].push(2);
      }
      setStateTableData(Object.values(featureObj))
    }
}

export {
  scrollCardByWidth,
  checkSession,
  addToLooksSession,
  removeFromLooksSession,
  structureTableData,
  checkCardAction
};