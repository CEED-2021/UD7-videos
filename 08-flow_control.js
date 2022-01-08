const asyncRequest = require('./asyncRequest');

function getResource(resource) {
  return new Promise((resolve, reject) => asyncRequest(resource, resolve) )
}

// ------------------------------------------
// The output of a "then" manager should be a promise
// ------------------------------------------
getResource('resource1')
.then( () => {
  return getResource('resource2')
})
.then( () => {
  return getResource('resource3')
})
.then( () => {
  console.log('All operations finished')
})


// ------------------------------------------
// This won't work as expected
// ------------------------------------------
getResource('resource1')
.then( () => {
  getResource('resource2')
})
.then( () => {
  getResource('resource3')
})
.then( () => {
  console.log('All operations finished')
})


// ------------------------------------------
// It will be converted to a promise if it's not a promise
// ------------------------------------------
getResource('resource1')
.then( (data) => {
  console.log(`Resource 1 is obtained: ${data}`);
  return `++${data}++`;
})
.then( (data) => {
  console.log(`Formated data obtained: ${data}`)
})




// getResource('resource1')
// .then( (data) => {
//   console.log(`The resource 1 is ${data}`)
//   return getResource('resource2')
// })
// .then( (data) => {
//   console.log(`The resource 3 is ${data}`)
//   return getResource('resource3')
// })
