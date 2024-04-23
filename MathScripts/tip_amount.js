"use strict"

var bill = 20;
var tipPercentage = 5;
var tipAmount = bill * (tipPercentage/100);

let active = false;


let result = `The tip on a $${bill} food bill is $${tipAmount}`

if(active){
//result with string concatenation
console.log(
    "The tip on a $" + bill + "food bill is $" + tipAmount);


} else {

//result with string Literals

console.log(result);


}


