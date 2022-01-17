const fetch = require('node-fetch');

fetch('https://www.google.es')
.then( (response) => {
  console.log(response.status);
  return response.text();
})
.then( (data) => {
  console.log(data)
})
