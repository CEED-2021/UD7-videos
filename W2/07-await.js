// -------------------------------------------------------------------------
// "await" waits until the promise is fulfilled and returns the data
// -------------------------------------------------------------------------
function getData(id) {
  if(!id) return Promise.reject('No id provided');
  return Promise.resolve(`Some data for ${id}`);
}

async function getClientData() {
  let client1 = await getData('client1');
  console.log(client1);
}

getClientData();


// -------------------------------------------------------------------------
// You can put as many awaits as you want
// -------------------------------------------------------------------------
async function getClientData2() {
  let client1 = await getData('client1');
  // I can do more things here
  let client2 = await getData('client2');
  console.log(client1, client2);
}

getClientData2();


// -------------------------------------------------------------------------
// You CAN'T use it in regular functions
// -------------------------------------------------------------------------
// function getClientData3() {
//   let client1 = await getData('client1'); // Syntax error
//   // I can do more things here
//   let client2 = await getData('client2');
//   console.log(client1, client2);
// }


// -------------------------------------------------------------------------
// Rejected promises are transformed into errors
// -------------------------------------------------------------------------
async function getClientData3() {
  try {
    let client1 = await getData();
  }catch(error){
    console.log(`Something has failed: ${error}`)
  }
}

getClientData3();
