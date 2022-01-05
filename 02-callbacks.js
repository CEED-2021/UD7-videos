const asyncRequest = require('./asyncRequest');

//---------------------------------------------------------
// A simple callback
//---------------------------------------------------------
asyncRequest('resource1', (data) => {
  console.log(`The resource one has data: ${data}`)
})



//---------------------------------------------------------
// A nested callback
//---------------------------------------------------------
asyncRequest('whatINeed', (resourceName) => {
  asyncRequest(resourceName, (data) => {
    console.log(`The resource I needed was ${data}`)
  })
})


//---------------------------------------------------------
// Callback hell
//---------------------------------------------------------

// Those functions are supossed to be async
function convert(data, cb) { cb(data) }
function storeInDB(data, cb) { cb() }

// This is what we want to do
asyncRequest('whatINeed', (resourceName) => {
  asyncRequest(resourceName, (data) => {
    convert(data, (converted) => {
      storeInDB(converted, () => {
        console.log(`The converted data is stored in the db`)
      })
    })
  })
})
