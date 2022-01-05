const asyncRequest = require('./asyncRequest');

function createPromise(asyncOperation, ...params) {

  let obtained = false;
  let value = false;

  return {
    then: function(callback) {

      if(obtained) {
        callback(value);
      } else {
        asyncOperation(...params, (operationReturn) => {
          value = operationReturn;
          obtained = true;
          callback(value);
        })
      }

    }
  }
}


let resource1 = createPromise(asyncRequest, 'resource1');

resource1.then(
  (value) => console.log(`Obtained "${value}"`)
)
resource1.then(
  (value) => console.log(`Obtained "${value}"`)
)
