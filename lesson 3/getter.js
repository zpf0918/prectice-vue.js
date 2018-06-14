var p = {
  x: 1.0,
  y: 2.0,
  get r() {
    return Math.sprt(this.x*this.x+this.y*this.y);
  },
  set r(newvalue) {
    var oldvalue = Math.sprt(this.x*this.x+this.y*this.y);
    var ratio = newvalue/oldvalue;
    this.x * = ratio;
    this.y * = ratio;
  },

  get theta() { return Math.atan2(this.y, this.x);}
}

p.r
