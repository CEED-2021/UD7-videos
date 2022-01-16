const fetch = require('node-fetch');

fetch('https://www.google.es')
.then( (response) => {
  console.log(response)
})
