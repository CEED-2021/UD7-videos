function asyncThing() {
  return Promise.resolve("Some data")
}

// -------------------------------------------------------------------------
// You can return a catch an error anywhere in the chain
// -------------------------------------------------------------------------
asyncThing()
.then( (data) => {
  console.log(`received ${data}`)
  throw "This is as far as you go"
})
.then( (data) => {
  console.log("This won't be executed")
})
.catch( (error) => {
  console.log(`Detected an error: ${error}`);
  return "I don't have original data here"
})
.then( (data) => {
  console.log("The error has been solved, so I will print")
  return data
})
.then( (data) => {
  console.log(`received ${data}`)
  throw "This is as far as you go"
})
.then( (data) => {
  console.log("This won't be executed either")
})
.catch( (error) => {
  console.log(`Detected an error: ${error}`);
})

// -------------------------------------------------------------------------
// If you don't catch the last error, you'll receive an Unhandled rejection warning
// -------------------------------------------------------------------------
asyncThing()
.then( (data) => {
  console.log(`received ${data}`)
  throw "This is as far as you go"
})
.then( (data) => {
  console.log("This won't be executed")
})
.catch( (error) => {
  console.log(`Detected an error: ${error}`);
  return "I don't have original data here"
})
.then( (data) => {
  console.log("The error has been solved, so I will print")
  return data
})
.then( (data) => {
  console.log(`received ${data}`)
  throw "This is as far as you go"
})
.then( (data) => {
  console.log("This won't be executed either")
})
