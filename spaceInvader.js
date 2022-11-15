"use strict";

drawSpaceinvader();

function drawSpaceinvader() {
    let canvas = document.querySelector("canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    let context = canvas.getContext("2d");

    context.beginPath();
    context.rect(50, 50, 300, 300);
    context.fillStyle = "black";
    context.fill();

    context.beginPath();
    context.rect(75, 300, 50, 50);
    context.rect(75, 250, 50, 50);
    context.rect(125, 250, 50, 50);
    context.rect(75, 150, 50, 50);
    context.rect(275, 150, 50, 50);
    context.rect(225, 250, 50, 50);
    context.rect(275, 250, 50, 50);
    context.rect(275, 300, 50, 50);
    context.rect(225, 200, 50, 50);
    context.rect(125, 200, 50, 50);
    context.rect(175, 200, 50, 50);
    context.rect(175, 150, 50, 50);
    context.fillStyle = "#00ff00";
    context.fill();
    
    
}