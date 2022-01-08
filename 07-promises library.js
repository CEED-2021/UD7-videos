const asyncRequest = require('./asyncRequest');

let resource1 = new Promise( function(resolve, reject) {
  asyncRequest('resource1', resolve)
})

resource1.then(
  (value) => console.log(`Obtained "${value}"`)
)
resource1.then(
  (value) => console.log(`Obtained "${value}"`)
)
