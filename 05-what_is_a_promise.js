const asyncRequest = require('./asyncRequest');

function createPromise(asyncOperation, ...params) {

  let obtained = false;
  let value = false;
  let callbacks = [];

  asyncOperation(...params, (operationReturn) => {
    if(obtained) return;

    value = operationReturn;
    obtained = true;
    callbacks.forEach( callback => callback(value) );
  })

  return {
    onDone: function(getValue) {
      if(obtained) {
        getValue(value);
      } else {
        callbacks.push(getValue)
      }
    }
  }
}


let resource1 = createPromise(asyncRequest, 'resource1');

resource1.onDone(
  (value) => console.log(`Obtained "${value}"`)
)
resource1.onDone(
  (value) => console.log(`Obtained "${value}"`)
)
