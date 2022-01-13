const asyncRequest = require('./asyncRequest');

function getResource(resource) {
  return new Promise((resolve, reject) => asyncRequest(resource, resolve) )
}

// ------------------------------------------------------
// With callbacks
// ------------------------------------------------------
asyncRequest('resource1', (data) => {
  console.log(`obtained ${data}`);
  asyncRequest('resource2', (data) => {
    console.log(`obtained ${data}`);
    asyncRequest('resource3', (data) => {
      console.log(`obtained ${data}`);
      console.log('all operations finished');
    })
  })
})

// ------------------------------------------------------
// With promises, naïve version (don't do this at home)
// ------------------------------------------------------
getResource('resource1')
.then( (data) => {
  console.log(`obtained ${data}`);
  getResource('resource2').then( (data) => {
    console.log(`obtained ${data}`);
    getResource('resource3').then((data) => {
      console.log(`obtained ${data}`);
      console.log('all operations finished');
    })
  })
})


// ------------------------------------------------------
// The output "goes" to the next then
// ------------------------------------------------------
getResource('resource1')
.then( (data) => {
  console.log(`obtained ${data}`);
  return getResource('resource2')
})
.then( (data) => {
  console.log(`obtained ${data}`);
  return getResource('resource3')
})
.then( (data) => {
  console.log(`obtained ${data}`);
  console.log('All operations finished')
})


// ------------------------------------------------------
// You must return the value. This won't work as expected
// ------------------------------------------------------
getResource('resource1')
.then( (data) => {
  console.log(`obtained ${data}`);
  getResource('resource2')
})
.then( (data) => {
  console.log(`obtained ${data}`);
  getResource('resource3')
})
.then( (data) => {
  console.log(`obtained ${data}`);
  console.log('All operations finished')
})


// ------------------------------------------
// It will be converted to a promise if it's not a promise
// ------------------------------------------
getResource('resource1')
.then( (data) => {
  console.log(`obtained ${data}`);
  // This will return a fulfilled promise with value 'banana'
  return 'banana';
})
.then( (data) => {
  // This will execute inmediatly after "return 'banana'"
  console.log(`obtained ${data}`);
  return 'papaya';
})
.then( (data) => {
  // This will execute inmediatly after "return 'papaya'"
  console.log(`obtained ${data}`);
  console.log('all operations finished');
})
