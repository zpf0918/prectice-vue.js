var obj = {
  my_name: 'jonathan',
  get name() {
    return '111';
  },

  set name(val) {
    this.my_name = val;
  }

}
console.log(obj.name = '222');
