var mouse_event="empty";
var last_position_of_x,last_position_of_y;
var canvas=document.getElementById("myCanvas");
var ctx=canvas.getContext("2d");
var color="black";
var radi=40;
var width_of_line=1;
canvas.addEventListener("mousedown",my_mousedown);

function my_mousedown(e){
    color=document.getElementById("colour").value;
    radi=document.getElementById("radius").value;
    ctx.lineWidth=document.getElementById("width").value;
    mouse_event="mousedown";
}
canvas.addEventListener("mousemove",my_mousemove);

function my_mousemove(e){
    curent_position_of_x=e.clientX-canvas.offsetLeft;
    curent_position_of_y=e.clientY-canvas.offsetTop;
    if (mouse_event="mousedown"){

ctx.strokeStyle = color;
ctx.beginPath();
ctx.arc(curent_position_of_x,curent_position_of_y,radi ,0 , 2*Math.PI);
ctx.stroke();
    }
    last_position_of_x=curent_position_of_x;
    last_position_of_y=curent_position_of_y;
}
canvas.addEventListener("mouseup",my_mouseup);

function my_mouseup(e){
    mouse_event="mouseup";
}
canvas.addEventListener("mouseleave",my_mouseleave);

function my_mouseleave(e){
    mouse_event="mouseleave";
}
function Clear(){

    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}