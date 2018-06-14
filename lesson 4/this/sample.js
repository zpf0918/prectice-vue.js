function test(){

　　　　console.log(this.x);

}

var o = {};

o.x = 1;

o.m = test;

console.log(o);

o.m(); // 1
