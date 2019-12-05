const request = require('request');

const fetchBreedDescription = function(breed, callback) {

  let breedName = breed.toLowerCase().slice(0, 4);

  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    
    if (error) {
      callback(error);
      throw new Error('URL incorrect');
    }
    
    const data = JSON.parse(body);

    if (data[0] === undefined) {
      callback(error);
      throw new Error('breed not found');
    }
    
    let desc = data[0].description;
    console.log(typeof desc);

    callback(null, desc);
  });

};


module.exports = { fetchBreedDescription };


