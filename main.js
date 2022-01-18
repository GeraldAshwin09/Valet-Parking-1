canvas=document.getElementById("mycanvas");
ctx=canvas.getContext("2d");
var carX=10;
var carY=10;
var carh=150;
var carw=100;
var bgimg="parkingLot.jpg";
var carimg="car2.png";

function add()
{
    bgId=new Image();
    bgId.onload=bguploadimg;
    bgId.src=bgimg;

    cId=new Image();
    cId.onload=cuploadimg;
    cId.src=carimg;
}

function bguploadimg()
{
    ctx.drawImage(bgId,0,0,canvas.width,canvas.height);
}

function cuploadimg()
{
    ctx.drawImage(cId,carX,carY,carw,carh);
}

window.addEventListener("keydown",mk);
function mk(e)
{
keyPressed=e.keyCode;
if(keyPressed=="37")
{
console.log("left");
left();
}

if(keyPressed=="38")
{
console.log("up");
up();
}

if(keyPressed=="39")
{
console.log("right");
right();
}

if(keyPressed=="40")
{
console.log("down");
down();
}
}

function up()
{
  if(carY>=0)
  {
    carY=carY-10;
    bguploadimg();
    cuploadimg();
  }
}


function down()
{
  if(carY<=500)
  {
   carY=carY+10;
    bguploadimg();
    cuploadimg();
  }
}


function left()
{
  if(carX>=0)
  {
    roverX=roverX-10;
    bguploadimg();
    cuploadimg();
  }
}

function right()
{
  if(carX<=700)
  {
    carX=carX+10;
    bguploadimg();
   cuploadimg();
  }
}