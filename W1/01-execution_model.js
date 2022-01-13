function activeSleep(delay) {

  let startTime = new Date().getTime();

  while (true) {
    let currentTime = new Date().getTime();
    let timeElapsed = currentTime - startTime;

    if (timeElapsed > delay) break;
  }
}

function longRuningOperation(seconds=1) {

  let loops = Math.round(seconds * 1000 / 200);

  for (let i = 0; i < loops; i++) {
    console.log('Running...');
    activeSleep(200);
  }

}

setTimeout(
  () => console.log('Timeout done!!'),
  100
)

longRuningOperation(2)
