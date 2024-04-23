"use strict"

var roomLength = 10;
var roomWidth = 10;

var roomArea = roomLength * roomWidth;

var boxesNeeded = Math.ceil(roomArea / 12);

console.log(`For a room with an area of ${roomArea} feet, you need ${boxesNeeded} boxes`)