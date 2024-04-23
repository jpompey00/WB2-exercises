"use strict"

var peopleOnTour = 38;

var vansNeeded = Math.ceil(peopleOnTour/15);

const PRICE_TO_RENT = 250;

var costPerDay = vansNeeded * PRICE_TO_RENT;

var costPerPerson = (costPerDay/peopleOnTour).toFixed(2);


console.log(`There are ${peopleOnTour} people on tour. ${vansNeeded} vans are needed.\nThe cost to rent the vans per day is $${costPerDay}\nThis will cost $${costPerPerson} per person`)