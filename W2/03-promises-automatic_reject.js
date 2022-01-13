function asyncThing() {
  return Promise.resolve("Some data")
}

// -------------------------------------------------------------------------
// Exceptions are converted to rejected promises
// -------------------------------------------------------------------------
asyncThing()
.then( (data) => {
  console.log(`received ${data}`)
  throw "This is as far as you go"
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


// -------------------------------------------------------------------------
// This will be the "real" code executed above:
// -------------------------------------------------------------------------
asyncThing()
.then( (data) => {
  try{
    console.log(`received ${data}`)
    throw "This is as far as you go"
  }catch(error){
    return Promise.reject(error)
  }
})
.then( (data) => {
  try{
    console.log("This won't be executed")
  }catch(error){
    return Promise.reject(error)
  }
})
.then( (data) => {
  try{
    console.log("This won't be executed either")
  }catch(error){
    return Promise.reject(error)
  }
})
.catch( (error) => {
  console.log(`Detected an error: ${error}`);
})


// -------------------------------------------------------------------------
// TO-DO: for promises creation
// -------------------------------------------------------------------------
