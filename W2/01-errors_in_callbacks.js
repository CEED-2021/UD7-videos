const fs = require('fs')


// -------------------------------------------------------------
// Error handling with synchronous flow
// -------------------------------------------------------------

function IWouldntDoThis() {
  throw "I told you"
}

try {
  IWouldntDoThis()
}catch(error) {
  console.log(`Something went wrong: ${error}`)
}

// -------------------------------------------------------------
// That won't work here
// -------------------------------------------------------------

function asyncIWouldntDoThis(callback) {
  setTimeout(() => { throw "I told you some milliseconds ago" }, 100)
}

try {
  asyncIWouldntDoThis()
}catch(error) {
  console.log(`Something went wrong: ${error}`)
}


// -------------------------------------------------------------
// So the callback must receive the error somehow
// -------------------------------------------------------------

function asyncIWouldntDoThisToo(callback) {
  setTimeout(() => callback("It's the third time I tell it to you"), 100)
  setTimeout(() => callback(null, "But here you have some data"), 500)
}

asyncIWouldntDoThisToo( (error, data) => {
  if(error) {
    console.log(`Something went wrong: ${error}`);
    return;
  }
  console.log(`Something received: ${data}`)
})


// -------------------------------------------------------------
// A real example
// -------------------------------------------------------------

fs.readFile('./existing.txt', 'utf8' , (err, data) => {
  if (err) {
    console.error(err)
    return
  }
  console.log(data)
})
