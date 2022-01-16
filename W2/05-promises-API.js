function op(ms, fail = false){
  const description = `${fail?'Error in ':''}operation ${ms} long`;
  return new Promise( (resolve, reject) => {
    const operation = fail ? reject: resolve;
    setTimeout(
      () => operation(description)
      ,ms
    )
  });
}
const failedOp = (ms) => op(ms, true);

//-----------------------------------------------------------
// This "waits" until all promises are fulfilled or one fails
//-----------------------------------------------------------
(async () => {
  console.time('Promise.all');
  const data = await Promise.all([op(1000), op(2000)])
  console.timeEnd('Promise.all')
  console.log(data)
})();


//-----------------------------------------------------------
// This will return the first fulfilled or rejected promise
// It's useful for timeouts
//-----------------------------------------------------------
const timeout = failedOp;
(async () => {
  try {
    console.time('Promise.race');
    const data = await Promise.race([op(2000), timeout(1000)])
    console.timeEnd('Promise.race')
    console.log(data)
  } catch (error) {
    console.timeEnd('Promise.race')
    console.log('Too slow')
  }
})();


//-----------------------------------------------------------
// This will resolve with the first fulfilled promise
// If all of the given promises are rejected), then the returned promise is rejected
//-----------------------------------------------------------
(async () => {
  try {
    console.time('Promise.any');
    const data = await Promise.any([failedOp(1000), op(2000)])
    console.timeEnd('Promise.any')
    console.log(data)
  } catch (error) {
    console.timeEnd('Promise.any')
    console.log(error)
    console.log('All promises failed')
  }
})();

// We also have Promise.allSettled()






