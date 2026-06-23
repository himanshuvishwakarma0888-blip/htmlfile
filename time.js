function wait() {


  var id = setInterval(() => {
    console.log("2 sec passed");
  }, 2000);

  setTimeout(() => {
    clearInterval(id);
    console.log("Code stopped");
  }, 5000);
}

console.log("Hello");
wait();
console.log("World");
