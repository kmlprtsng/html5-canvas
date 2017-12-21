var canvas = document.querySelector("canvas");
canvas.width = window.innerWidth - 10;
canvas.height = window.innerHeight - 10;

var c = canvas.getContext("2d");
c.fillStyle = "rgba(255, 0, 0, 0.4)"; //fillStyles for rectangle
c.fillRect(100, 100, 100, 100); //c.fillRect(x, y, width, height);
c.fillStyle = "yellow";
c.fillRect(300, 300, 100, 100);

// Line
c.beginPath(); // we want to start a path but don't connect to anything preceding it
c.moveTo(50, 300); //c.moveTo(x,y)
c.lineTo(300, 100);
c.lineTo(400, 300);
c.strokeStyle = "blue"; //color of the line
c.stroke(); //for the line to show

//arc / circle
//start angle (radians, check it on Khan Academy) says at what angle do we start drawing the arc
//end angle, how long we would like the arc to go on for
c.beginPath(); //break away from the previously designed line
c.strokeStyle = "pink";
c.arc(300, 300, 30, 0, Math.PI * 2, false);
c.stroke(); //creates the border
c.fillStyle = "orange";
c.fill();
