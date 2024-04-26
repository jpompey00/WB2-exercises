"use strict";

//wants this to run when the page is loaded.
window.onload = init;

function init(){

    const helloButtonElement = document.getElementById("helloBtn");
    helloButtonElement.onclick = onHelloClicked;

    console.log(`index.js init() executed`)

}

function onHelloClicked(){
    alert("Hello Test");
    
    console.log(`index.js onHelloClicked() executed`)
}