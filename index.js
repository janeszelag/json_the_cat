const args = process.argv.slice(2);
const { fetchBreedDescription } = require('./breedFetcher.js');
let breed = args[0];


fetchBreedDescription(breed, (error, desc) => {
  if (error) {
    console.log('Error fetch details:', error);
  } else {
    console.log(desc);
  }
});
