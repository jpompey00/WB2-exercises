"use strict";

window.onload = init;

//The buttons
const addBtn = document.getElementById("addBtn");
const subtractBtn = document.getElementById("subtractBtn");
const multiplyBtn = document.getElementById("multiplyBtn");
const divideBtn = document.getElementById("divideBtn");
const number1Element = document.getElementById("number1Field");
const number2Element = document.getElementById("number2Field");
const answerElement = document.getElementById("answerField");




//TODO optional:
//have the answer box unable to accept any input.
//style with bootstrap a bit

function init() {


    //Solution done with 4 functions------------
    addBtn.onclick = onAddButtonClicked;
    subtractBtn.onclick = onSubtractButtonClicked;
    multiplyBtn.onclick = onMultiplyButtonClicked;
    divideBtn.onclick = onDivideButtonClicked;



    //Solution done with Anonmyous Functions----------------------
    // addBtn.onclick = function () { onCalculatorButtonClicked(1); };
    // subtractBtn.onclick = function () { onCalculatorButtonClicked(2); };
    // multiplyBtn.onclick = function () { onCalculatorButtonClicked(3); };
    // divideBtn.onclick = function () { onCalculatorButtonClicked(4); };
}



//Each function does what their name implies. Outputs the value to the answer element.
function onAddButtonClicked() {
    const number1Value = number1Element.value;
    const number2Value = number2Element.value;
    const answer = Number(number1Value) + Number(number2Value);

    answerElement.value = answer;
    console.log(Number(number1Value) + Number(number2Value));
}
function onSubtractButtonClicked() {
    const number1Element = document.getElementById("number1Field");
    const number2Element = document.getElementById("number2Field");
    const answerElement = document.getElementById("answerField");
    const number1Value = number1Element.value;
    const number2Value = number2Element.value;
    const answer = Number(number1Value) - Number(number2Value);

    answerElement.value = answer;
    console.log(Number(number1Value) - Number(number2Value));
}
function onMultiplyButtonClicked() {
    const number1Element = document.getElementById("number1Field");
    const number2Element = document.getElementById("number2Field");
    const answerElement = document.getElementById("answerField");
    const number1Value = number1Element.value;
    const number2Value = number2Element.value;
    const answer = Number(number1Value) * Number(number2Value);

    answerElement.value = answer;
    console.log(Number(number1Value) * Number(number2Value));
}
function onDivideButtonClicked() {
    const number1Element = document.getElementById("number1Field");
    const number2Element = document.getElementById("number2Field");
    const answerElement = document.getElementById("answerField");
    const number1Value = number1Element.value;
    const number2Value = number2Element.value;
    const answer = Number(number1Value) / Number(number2Value);

    answerElement.value = answer;
    console.log(Number(number1Value) / Number(number2Value));
}


//solution done with one function thats passing a value
function onCalculatorButtonClicked(operation) {
    const number1Element = document.getElementById("number1Field");
    const number2Element = document.getElementById("number2Field");
    const answerElement = document.getElementById("answerField");
    const number1Value = number1Element.value;
    const number2Value = number2Element.value;

    //
    if (operation == 1) {
        const answer = Number(number1Value) + Number(number2Value);
        answerElement.value = answer;

        console.log(answer);
    }
    if (operation == 2) {
        const answer = Number(number1Value) - Number(number2Value);
        answerElement.value = answer;

        console.log(answer);
    }
    if (operation == 3) {
        const answer = Number(number1Value) * Number(number2Value);
        answerElement.value = answer;

        console.log(answer);
    }
    if (operation == 4) {
        const answer = Number(number1Value) / Number(number2Value);
        answerElement.value = answer;

        console.log(answer);
    }

}


/*
The first function is ran with the (1) and is expecting a result
when the document starts
The second one is running the function  when its clicked, the function
is called
The third one is emulating how the second one does it but also passing the parameter
I need another explination on this!
*/

// addBtn.onclick = onAddButtonClicked(1);
// addBtn.onclick = onAddButtonClicked;
// addBtn.onclick = function () { onCalculatorButtonClicked(1); };