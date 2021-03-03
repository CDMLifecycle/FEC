const calc  = {

  averageRatingToQtr: (ratings) => {
    let total = 0
    let numOfRatings = 0;
    for (let key in ratings) {
      total+= parseInt(key) * parseInt(ratings[key]);
      numOfRatings += parseInt(ratings[key]);
    }
    if (numOfRatings > 0) {
      var average = total / numOfRatings
      return Math.floor(average * 4) / 4;
    } else {
      return null;
    }
  },

  sumObjValues: (property) => {
    let sum = 0;
    for (let key in property) {
      sum += parseInt(property[key])
    }
    return sum;
  },

  avgRating: (property) => {
    let totalRatings = calc.sumObjValues(property);
    let keyValueSum = 0;
    for (let rating in property) {
      keyValueSum += parseInt(rating) * parseInt(property[rating])
    }
    return keyValueSum / totalRatings;
  },

  calcMeta: (metaDataObject) => {
    let totals = {
      totalRatings: calc.sumObjValues(metaDataObject.ratings).toFixed(2),
      avgRatings: calc.avgRating(metaDataObject.ratings).toFixed(2),
      sumRecommendations: calc.sumObjValues(metaDataObject.recommended),
      percentRecommend: metaDataObject.recommended.true / calc.sumObjValues(metaDataObject.recommended).toFixed(2)
    }
    return { totals } ;
  }

}


module.exports = calc;