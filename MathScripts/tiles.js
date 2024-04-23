"use strict"

//CHANGE BASED ON ROOM DIMENSIONS
var roomLength = 10;100*.1
var roomWidth = 10;

//Formula for the room area
var roomArea = roomLength * roomWidth;

//getting 10% more tiles than needed
var extrasNeeded = roomArea * .10


//Formula determining the amount of boxes needed
var boxesNeeded = Math.ceil((roomArea + extrasNeeded) / 12);



//Output
console.log(`For a room with an area of ${roomArea} feet, and getting ${extrasNeeded} extra feet of tile, you need ${boxesNeeded} boxes`)