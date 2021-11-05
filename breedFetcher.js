const breedName = process.argv[2];
const req = require("request");
const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

req(url, (err, response, body) => {
  if (err) {
    console.log("Request faild", err);
  }
  const object = JSON.parse(body);
  const breed = object[0];
  // console.log(typeof breed);
  if (!breed) {
    return console.log(`${breedName} Not found!`);
    // console.log("error: ", err);
  }
  console.log(breed.description);
});
