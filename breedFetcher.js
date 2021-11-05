const req = require("request");

const fetchBreedDescription = function(breedName, callback) {
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
  req(url, (err, response, body) => {
    if (err) {
      return callback(err, null);
    }
    const object = JSON.parse(body);
    const breed = object[0];
    let desc;
    if (!breed) {
      desc = undefined;
      return callback(err, desc);
      // console.log("error: ", err);
    } else {
      desc = breed.description;
      // console.log(typeof breed);
      // return console.log(breed.description);

      return callback(err, desc);
    }
  });
};

module.exports = { fetchBreedDescription };
