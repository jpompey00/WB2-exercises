//Description: This script tests various numeric conversion techniques
//
//Author: Julian Pompey
"use strict";

var a = "  101.1   ";
var b = "55";
var c = "402 Stevens";
var d = "Number 5   ";


//Parseing the A Variable
console.log(`Expression ${a} | ParseInt result= ${parseInt(a)} |  parseFloat result= ${parseFloat(a)} |  numberResult= ${Number(a)} |  UnaryResult = ${+a}`)

//Parseing the B Variable
console.log(`Expression ${b} |  ParseInt result= ${parseInt(b)} |  parseFloat result= ${parseFloat(b)} |  numberResult= ${Number(b)} |  UnaryResult= ${+b}`)

//Parseing the C Variable
console.log(`Expression ${c} |  ParseInt result= ${parseInt(c)} |  parseFloat result= ${parseFloat(c)} |  numberResult= ${Number(c)} |  UnaryResult= ${+c}`)

//Parseing the D Variable
console.log(`Expression ${d} |  ParseInt result= ${parseInt(d)} |  parseFloat result= ${parseFloat(d)} |  numberResult= ${Number(d)} |  UnaryResult= ${+d}`)
