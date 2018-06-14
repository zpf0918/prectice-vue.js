var obj = {
  m : function () {
    var self = this;
    console.log(this === obj);
    f();

    function f() {
      console.log(this === obj);
      console.log(self === obj);
    }
  }
}

obj.m();
