function createCounter() {
  let counter = 0;
  const myFunction = function () {
    counter = counter + 1;
    console.log(counter)
  }
  myFunction()
  console.log(counter);
}

createCounter();
