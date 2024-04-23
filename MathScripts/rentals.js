"use strict"

//CHANGE Based on people on tour 
var peopleOnTour = 38;

//How many people can fit on the bus
var spaceOnBus = 15;

//finds the vans needed by diving and rounding up result of the people divided by the space on the bus
var vansNeeded = Math.ceil(peopleOnTour/spaceOnBus);

//The price per day to rent a bus
const PRICE_TO_RENT = 250;

//Calculates the cost needed per day
var costPerDay = vansNeeded * PRICE_TO_RENT;

//Calculates how much each person will need to pay per day
var costPerPerson = (costPerDay/peopleOnTour).toFixed(2);


//output
console.log(`There are ${peopleOnTour} people on tour. ${vansNeeded} vans are needed.\nThe cost to rent the vans per day is $${costPerDay}\nThis will cost $${costPerPerson} per person`)