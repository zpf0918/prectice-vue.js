var name = "The Window";
var object = {
  name : "My Object",
  getNameFunc(){
    self = this;
    return function(){
　    return self.name;
　  };
　}
};

let output = object.getNameFunc()();
console.log(output);
