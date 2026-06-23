let count = 0;

const intervalId = setInterval(() => {
  count++;
  console.log("Interval: ", count);
  if (count == 3) {
    clearInterval(intervalId);
  }
}, 1000);

setTimeout(() => {
  console.log("Timeout");
}, 2500);
