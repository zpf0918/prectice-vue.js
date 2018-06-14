function main() {
  var name = 'xiaoming';
  return function() {
    console.log(name);
  }
}

var output = main();
output();
