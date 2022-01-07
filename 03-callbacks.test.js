const asyncRequest = require('./asyncRequest');


function banana(callback) {
  callback('banana')
}

function papaya(callback) {
  setTimeout(
    () => callback('papaya'),
    1000
  );
}

function mango(callback) {
  // Ignoring you...
}


// ----------------------------------------------------------
// This will work with a sync function
// ----------------------------------------------------------
it('returns banana synchronously', () => {
  function callback(data) {
    expect(data).toBe('banana');
  }

  banana(callback);
});


// ----------------------------------------------------------
// This WON'T work properly with an async function
// ----------------------------------------------------------
it('returns banana asynchronously (bad tested)', () => {
  function callback(data) {
    expect(data).toBe('banana');
  }

  papaya(callback);
});

// But the real problem is this:
it('returns banana asynchronously (bad tested, never called)', () => {
  function callback(data) {
    expect(data).toBe('banana');
  }

  mango(callback);
});



// ----------------------------------------------------------
// This is the correct way of testing async functions
// ----------------------------------------------------------
it('returns banana synchronously (well tested', done => {
  function callback(data) {
    try {
      expect(data).toBe('banana');
      done();
    }catch(error) {
      done(error)
    }
  }

  papaya(callback);
})
