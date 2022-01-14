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
  try {
    console.log(`Detected an error: ${error}`);
  }catch(error){
    return Promise.reject(error)
  }
})


// -------------------------------------------------------------------------
// The try-catch is appened to promises creation, too
// -------------------------------------------------------------------------
function asyncThing2({fail = false} = {}) {
  return new Promise( (resolve, reject) => {
    throw "Something terrible has happended";
  })
}

function asyncThing2_real({fail = false} = {}) {
  try {
    return new Promise( (resolve, reject) => {
      throw "Something terrible has happended";
    })
  } catch(error){
      return Promise.reject(error)
  }
}

asyncThing2()
.then( () => {
  console.log("This won't be executed")
})
.catch( (error) => {
  console.log(`Detected an error: ${error}`);
})
