canvas = document.getElementById("mycanvas");
ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.strokeStyle="red";
ctx.lineWidth = 2;
ctx.rect(175, 143, 430, 200);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="Blue";
ctx.lineWidth = 2;
ctx.arc(300, 200, 40, 0, 2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="yellow";
ctx.lineWidth = 2;
ctx.arc(340, 250, 40, 0, 2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="Black";
ctx.lineWidth = 2;
ctx.arc(390, 200, 40, 0, 2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="green";
ctx.lineWidth = 2;
ctx.arc(440, 250, 40, 0, 2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="red";
ctx.lineWidth = 2;
ctx.arc(480, 200, 40, 0, 2*Math.PI);
ctx.stroke();