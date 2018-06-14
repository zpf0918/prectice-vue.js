var numbers = [99, 80, 100, 99, 86];
var scores = {
  studentA: 99,
  studentB: 80,
  studentC: 100,
  studentD: 99,
  studentE: 86
};


// for 循环


// for (let i=0; i < numbers.length; i++) {
//   console.log(numbers[i]);
// }

// for (let i=0; i < scores.length; i++ ) {
//   console.log(i);
// }   // scores 是对象，对象没有length属性，所以scores.length 是undefined
//
// for (let i=0; i < numbers.length; i++) {
//   console.log(numbers[i]);
//   if (numbers[i] == 100) {
//     break;
//   }
// }


// for each 循环
// numbers.forEach(function (item){
//   console.log(item);
// }) // for each 循环中会调动一个函数，这个函数如果有两个变量，那么第一个就是循环中的具体元素，第二个是循环中的游标


// scores.forEach(function (item){
//   console.log(item);
// }) // scores是一个对象，对象是没有forEach这个函数的


// for in 循环

// for (let item in numbers) {
//   console.log(numbers[item]);
// }

// for (let item in scores) {
//   console.log(scores[item]);
// } // for in 适合遍历对象的属性，而不适合遍历数组


//for of 循环
// for (let item of numbers) {
//   console.log(item);
// }

// for (let item of scores) {
//   console.log(item);
// } // 不能遍历

for (let item of Object.keys(scores)) {
  console.log(item)
}
