"use strict"
//area of circle = pi * r^2

var radius = 2


var result = `The area of a circle with radius ${radius} is ${(Math.PI * radius ** 2).toFixed(2)}`


//result with string concatenation
console.log(
    "The area of a circle with radius " + radius + " is " + (Math.PI * radius**2)
)


//result with string Literals
console.log(result)