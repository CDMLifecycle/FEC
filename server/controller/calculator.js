const calc  = {

  averageRatingToQtr: (ratings) => {
    let average = calc.avgRating(ratings);
    return average ? Math.round(average * 4) / 4 : null;
  },

  sumObjValues: (property) => {
    let sum = 0;
    let flag = false;
    for (let key in property) {
      sum += parseInt(property[key])
      flag = true;
    }
    return flag ? sum : null;
  },

  avgRating: (property) => {
    let totalRatings = calc.sumObjValues(property);
    let keyValueSum = 0;
    let flag = false;
    for (let rating in property) {
      keyValueSum += parseInt(rating) * parseInt(property[rating]);
      flag = true;
    }
    return flag ? Number((keyValueSum / totalRatings).toFixed(2)) : null;
  },

  percent: (favorable, total) => {
    return favorable ? ((favorable / total).toFixed(2)) : null;
  },

  calcMeta: (metaDataObject) => {
    let totals = {
      totalRatings: calc.sumObjValues(metaDataObject.ratings),
      avgRating: calc.avgRating(metaDataObject.ratings),
      avgRatingsToQtr: calc.averageRatingToQtr(metaDataObject.ratings),
      sumRecommendations: calc.sumObjValues(metaDataObject.recommended),
      percentRecommend: calc.percent(metaDataObject.recommended.true, calc.sumObjValues(metaDataObject.recommended)) * 100,
      ratingsPercent: {
        1: calc.percent(metaDataObject.ratings['1'], calc.sumObjValues(metaDataObject.ratings)),
        2: calc.percent(metaDataObject.ratings['2'], calc.sumObjValues(metaDataObject.ratings)),
        3: calc.percent(metaDataObject.ratings['3'], calc.sumObjValues(metaDataObject.ratings)),
        4: calc.percent(metaDataObject.ratings['4'], calc.sumObjValues(metaDataObject.ratings)),
        5: calc.percent(metaDataObject.ratings['5'], calc.sumObjValues(metaDataObject.ratings))
      }
    }
    return { totals };
  }
}

module.exports = calc;