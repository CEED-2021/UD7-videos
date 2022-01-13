// -------------------------------------------------------------------------
// What hapens if the promise "fails"?
// -------------------------------------------------------------------------
function asyncThingThatFails() {
  return Promise.reject("I've failed miserably")
}

// -------------------------------------------------------------------------
// This will raise an "UnhandledPromiseRejectionWarning"
// -------------------------------------------------------------------------
asyncThingThatFails()
.then( () =>{
  console.log("This won't be executed")
})


// -------------------------------------------------------------------------
// This will catch the promise rejection
// -------------------------------------------------------------------------
asyncThingThatFails()
.then( () =>{
  console.log("This won't be executed")
})
.catch( (error) => {
  console.log(`Detected an error: ${error}`);
})


// -------------------------------------------------------------------------
// You can return a rejected promise anywhere in the chain
// -------------------------------------------------------------------------
function asyncThing() {
  return Promise.resolve("Some data")
}

asyncThing()
.then( (data) => {
  console.log(`received ${data}`)
  return Promise.reject("This is as far as you go")
})
.then( (data) => {
  console.log("This won't be executed")
})
.then( (data) => {
  console.log("This won't be executed either")
})
.catch( (error) => {
  console.log(`Detected an error: ${error}`);
})

