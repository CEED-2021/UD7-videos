// -------------------------------------------------------------------------
// How to handle this?
// -------------------------------------------------------------------------
// function asyncThing({fail = false} = {}) {
//   return new Promise( (resolve, reject) => {
//     setTimeout( () => {
//       if(fail) throw "Something terrible has happened in the future";
//       resolve('OK')
//     }
//     , 100)
//   })
// }

// -------------------------------------------------------------------------
// This won't work
// -------------------------------------------------------------------------
// asyncThing({fail: true})
// .then( (data) => {
//   console.log(`Something received: ${data}`)
// })
// .catch((error) => {
//   console.log(`Something went wrong: ${error}`)
// })


//-------------------END OF VIDEO ----------------------------

// -------------------------------------------------------------------------
// Catch catches rejected promises
// -------------------------------------------------------------------------
function thisWillFail({fail = false} = {}) {
  return Promise.reject("Something terrible has happended")
}
thisWillFail({fail: true})
.then( (data) => {
  console.log(`Something received: ${data}`)
})
.catch((error) => {
  console.log(`Something went wrong: ${error}`)
})


// // -------------------------------------------------------------------------
// // Let's start with this:
// // -------------------------------------------------------------------------
// function asyncThing({fail = false} = {}) {
//   return new Promise( (resolve, reject) => {
//     if(fail) throw "Something terrible has happended";
//     setTimeout( () => {
//       resolve('OK')
//     }
//     , 100)
//   })
// }
// // -------------------------------------------------------------------------
// // The above code is equivalent to this
// // -------------------------------------------------------------------------
// function asyncThing({fail = false} = {}) {
//   try {
//     return new Promise( (resolve, reject) => {
//       if(fail) throw "I told you some milliseconds ago";
//       setTimeout( () => {
//         resolve('OK')
//       }
//       , 100)
//     })
//   }catch(error) {
//     reject(error)
//   }
// }







// // -------------------------------------------------------------
// // When it works, everything is fine
// // -------------------------------------------------------------
// // asyncThing()
// // .then( (data) => {
// //   console.log(`Something received: ${data}`)
// // })

// // -------------------------------------------------------------
// // This won't work
// // -------------------------------------------------------------
// // try {
// //   asyncThing({fail: true})
// //   .then( (data) => {
// //     console.log(`Something received: ${data}`)
// //   })
// // }catch(error) {
// //   console.log(`Something went wrong: ${error}`)
// // }

// // -------------------------------------------------------------
// // That is the way to handle it
// // -------------------------------------------------------------
// // asyncThing({fail: true})
// // .then( (data) => {
// //   console.log(`Something received: ${data}`)
// // })
// // .catch((error) => {
// //   console.log(`Something went wrong: ${error}`)
// // })


// // -------------------------------------------------------------
// // It will catch errors in the handler
// // -------------------------------------------------------------
// asyncThing({fail: false})
// .then( (data) => {
//   throw "I'm not going this for free!!"
//   console.log(`Something received: ${data}`)
// })
// .catch((error) => {
//   console.log(`Something went wrong: ${error}`)
// })

