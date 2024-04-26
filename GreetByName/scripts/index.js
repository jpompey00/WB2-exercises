
window.onload = init;

function init(){

    const greetBtnElement = document.getElementById("greetBtn");
    const nameField = document.getElementById("nameField");

    greetBtnElement.onclick = onGreetUserBtnClicked;
}

function onGreetUserBtnClicked(){
    //console.log(nameField.value);
    
    alert(`Hello ${nameField.value}`);
}