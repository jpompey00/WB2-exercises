"use strict"

//CHANGE BASED ON ROOM DIMENSIONS
var roomLength = 10;
var roomWidth = 10;

//Formula for the room area
var roomArea = roomLength * roomWidth;

//Formula determining the amount of boxes needed
var boxesNeeded = Math.ceil(roomArea / 12);


//Output
console.log(`For a room with an area of ${roomArea} feet, you need ${boxesNeeded} boxes`)