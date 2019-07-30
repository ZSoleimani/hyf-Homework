let x = function() {
    return Math.floor(Math.random() * 2000);
  };
  let y = function() {
    return Math.floor(Math.random() * 500);
  };
  let radius = function() {
    return Math.floor(Math.random() * 200);
  };
  
  let fillStyle = function() {
    let r = Math.floor((Math.random() * 550) +10);
    let g = Math.floor((Math.random() * 10) +1);
    let b = Math.floor((Math.random() * 100) +50);
    return "rgba(" + r + "," + g + "," + b + ",1)";
  };
  //draw circle
  class Circle {
    constructor(x, y, r, startAngle, endAngle, Color) {
      this.x = x;
      this.y = y;
      this.radius = r;
      this.startAngle = startAngle;
      this.endAngle = endAngle;
      this.fillColor = Color;
    }
    draw() {
      var c = document.getElementById("myCanvas");
      var ctx = c.getContext("2d");
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, this.startAngle, this.endAngle);
      ctx.fillStyle = this.fillColor;
      ctx.fill();
    }
  }
  /*draw circle for every 5sec*/
  setInterval(() => {
    const c1 = new Circle(x(), y(), radius(), 0, 2 * Math.PI, fillStyle());
    c1.draw();
  }, 100);
  
