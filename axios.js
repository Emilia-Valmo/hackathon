const axios = require("axios");

axios
  .get("https://akabab.github.io/superhero-api/api/all.json")
  .then(function(response) {
    return console.log(response);
  })
  .catch(function(error) {
    return console.log(error);
  });
