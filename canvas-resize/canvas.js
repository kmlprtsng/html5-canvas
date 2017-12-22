var canvas = document.querySelector("canvas");
canvas.width = window.innerWidth - 10;
canvas.height = window.innerHeight - 10;

//fill with fill the inside of the object with a color

var c = canvas.getContext("2d");
// c.fillStyle = "rgba(255, 0, 0, 0.4)"; //fillStyles for rectangle
// c.fillRect(100, 100, 100, 100); //c.fillRect(x, y, width, height);
// c.fillStyle = "yellow";
// c.fillRect(300, 300, 100, 100);

// // Line
// c.beginPath(); // we want to start a path but don't connect to anything preceding it
// c.moveTo(50, 300); //c.moveTo(x,y)
// c.lineTo(300, 100);
// c.lineTo(400, 300);
// c.strokeStyle = "blue"; //color of the line
// c.stroke(); //for the line to show

//arc / circle
//start angle (radians, check it on Khan Academy) says at what angle do we start drawing the arc
//end angle, how long we would like the arc to go on for
// c.beginPath(); //break away from the previously designed line
// c.strokeStyle = "pink";
// c.fillStyle = "orange";
// c.arc(300, 300, 30, 0, Math.PI * 2, false);
// c.stroke(); //creates the border
// c.fill();
// for (var i = 0; i < 100; i++) {

//   var x = Math.random() * canvas.width;
//   var y = Math.random() * canvas.height;

//   c.beginPath(); //break away from the previously designed line
//   c.strokeStyle = getRandomColor();
//   c.arc(x, y, 30, 0, Math.PI * 2, false);
//   c.stroke(); //creates the border
// }

function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function Circle(x, y, dx, dy, radius, strokeColor) {
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.radius = radius;
  this.strokeColor = strokeColor;

  this.draw = function() {
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    c.strokeStyle = this.strokeColor;
    c.stroke();
  };

  this.update = function() {
    if (this.x + this.radius > canvas.width || this.x - this.radius < 0) {
      this.dx = -this.dx;
    }

    if (this.y + this.radius > canvas.height || this.y - this.radius < 0) {
      this.dy = -this.dy;
    }

    this.x += this.dx;
    this.y += this.dy;

    this.draw();
  };
}

var circlesArray = [];

for (var i = 0; i < 50; i++) {
  //random gives us a number between 0 and 1
  var radius = 30,
    x = Math.random() * (canvas.width - radius * 2) + radius, //random starting x value within the canvas
    dx = Math.random() * 3, //x velocity (speed) is 1 if the value is 1 i.e. 1 pixel per frame e.g. x++
    y = Math.random() * (canvas.height - radius * 2) + radius, //y velocity (speed) is 1 if the value is 1 i.e. 1 pixel per frame e.g. y++
    dy = Math.random() * 3;

  circlesArray.push(new Circle(x, y, dx, dy, radius, getRandomColor()));
}

function animate() {
  requestAnimationFrame(animate); //create a loop, recursive

  c.clearRect(0, 0, canvas.width, canvas.height); //clear the whole canvas

  for (var i = 0; i < circlesArray.length; i++) {
    circlesArray[i].update();
  }
}

animate();
