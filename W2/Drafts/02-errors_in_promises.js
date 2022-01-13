



function asyncThing({fail = false} = {}) {
  return new Promise( (resolve, reject) => {
    if(fail) throw "Something terrible has happended";
    setTimeout( () => {
      resolve('OK')
    }
    , 100)
  })
}

// -------------------------------------------------------------
// When it works, everything is fine
// -------------------------------------------------------------
asyncThing()
.then( (data) => {
  console.log(`Something received: ${data}`)
})

// -------------------------------------------------------------
// This won't work
// -------------------------------------------------------------
try {
  asyncThing({fail: true})
  .then( (data) => {
    console.log(`Something received: ${data}`)
  })
}catch(error) {
  console.log(`Something went wrong: ${error}`)
}

// -------------------------------------------------------------
// This is the way to handle it
// -------------------------------------------------------------
asyncThing({fail: true})
.then( (data) => {
  console.log(`Something received: ${data}`)
})
.catch((error) => {
  console.log(`Something went wrong: ${error}`)
})

// -------------------------------------------------------------
// It will catch errors in the handler
// -------------------------------------------------------------
asyncThing({fail: false})
.then( (data) => {
  throw "I'm not going this for free!!"
  console.log(`Something received: ${data}`)
})
.catch((error) => {
  console.log(`Something went wrong: ${error}`)
})

