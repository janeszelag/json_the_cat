const args = process.argv.slice(2);
const request = require('request');
let breed = args[0];


let id = breed.toLowerCase().slice(0, 4);



request(`https://api.thecatapi.com/v1/breeds/search?q=${id}`, (error, response, body) => {

  if (error) {
    console.log('Sorry we were not able to find that breed for you', error);
  } else {
    
    const data = JSON.parse(body);
    
    if (data[0] === undefined) {
      console.log('Sorry we were not able to find that breed for you');
    } else {
      console.log(data[0].description);
    }

  }
   
});
