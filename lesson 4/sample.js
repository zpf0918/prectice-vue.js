function createCounter() {
  let counter = 0;
  const myFunction = function () {
    counter = counter + 1;
    return counter;
  }
  return myFunction
}
const increment = createCounter(); //increment是定义在createCounter的外面，那它为什么能够使用该函数内的变量呢
const c1 = increment();
const c2 = increment();
const c3 = increment();
console.log(c1, c2, c3);
