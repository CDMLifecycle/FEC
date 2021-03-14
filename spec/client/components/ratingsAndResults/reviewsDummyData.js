const dummyData = {
  metadataExt:{
    'product_id': "14034",
    "ratings": {
        "0": "1",
        "1": "4",
        "2": "3",
        "3": "10",
        "4": "6",
        "5": "14"
    },
    "recommended": {
        "false": "5",
        "true": "33"
    },
    "characteristics": {
        "Fit": {
            "id": 47019,
            "value": "2.5937500000000000"
        },
        "Length": {
            "id": 47020,
            "value": "2.6875000000000000"
        },
        "Comfort": {
            "id": 47021,
            "value": "3.0312500000000000"
        },
        "Quality": {
            "id": 47022,
            "value": "2.9375000000000000"
        }
    },
    totals: {
      avgRating: 3.92,
      avgRatingsToQtr: 4,
      percentRecommend: 68,
      ratingsPercent: {1: null, 2: "0.12", 3: "0.28", 4: "0.16", 5: "0.44"},
      sumRecommendations: 25,
      totalRatings: 25
    }
  },

  metadataExtNull: {
    characteristics: {
      Comfort: {id: 47021, value: null},
      Fit: {id: 47019, value: null},
      Length: {id: 47020, value: null},
      Quality: {id: 47022, value: null}
    },
    product_id: "14034",
    ratings: {
      0: null,
      1: null,
      2: null,
      3: null,
      4: null,
      5: null
    },
    recommended: {
      false: null,
      true: null
    },
    totals: {
      avgRating: null,
      avgRatingsToQtr: null,
      percentRecommend: null,
      ratingsPercent: {1: null, 2: null, 3: null, 4: null, 5: null},
      sumRecommendations: 41,
      totalRatings: null
    }
  },


  reviews: [{
    "review_id": 288008,
    "rating": 4,
    "summary": "Did component mount?",
    "recommend": false,
    "response": null,
    "body": "body",
    "date": "2021-03-04T00:00:00.000Z",
    "reviewer_name": "Daniel Kosykh",
    "helpfulness": 43,
    "photos": []
  },
  {
    "review_id": 287982,
    "rating": 2,
    "summary": "Sadness",
    "recommend": true,
    "response": null,
    "body": ":(",
    "date": "2021-03-03T00:00:00.000Z",
    "reviewer_name": "Daniel ",
    "helpfulness": 41,
    "photos": []
  }],

  product: {
    "id": 14931,
    "campus": "hr-sfo",
    "name": "Manuela Pants",
    "slogan": "Nemo ratione deserunt.",
    "description": "Rerum quia tempore aperiam reiciendis. Eum a enim. Saepe magni tenetur et. Sit est beatae.",
    "category": "Pants",
    "default_price": "398.00",
    "created_at": "2021-02-23T02:49:03.102Z",
    "updated_at": "2021-02-23T02:49:03.102Z"
  }


}

export default dummyData;