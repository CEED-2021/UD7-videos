// -------------------------------------------------------------------------
// "async" ensures that a function returns a promise
// -------------------------------------------------------------------------
function f1() {
  return 'A string'
}
console.log('Result: '+ f1())

async function f2() {
  return 'A string'
}
console.log('Result: '+ f2())

async function f3() {
  return Promise.resolve('A string')
}
console.log('Result: '+ f3())

async function f4() {
  return new Promise(() => {
    // I'll resolve it later
  })
}
console.log('Result: '+ f4())

// -------------------------------------------------------------------------
// Exceptions are transformed in rejected promises
// -------------------------------------------------------------------------
async function thisWillFail() {
  throw 'I told you'
}

thisWillFail()
.catch( (error) => {
  console.log(`Something has failed: ${error}`)
})
