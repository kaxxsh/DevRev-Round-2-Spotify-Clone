const axios = require("axios");

const options = {
  method: "GET",
  url: "https://shazam-core.p.rapidapi.com/v1/search/multi",
  params: { query: "metallica", search_type: "SONGS_ARTISTS" },
  headers: {
    "X-RapidAPI-Key": "db926bcf8amshaa3e2318c802638p113ea8jsn2d9a70c27c91",
    "X-RapidAPI-Host": "shazam-core.p.rapidapi.com",
  },
};

axios
  .request(options)
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.error(error);
  });
