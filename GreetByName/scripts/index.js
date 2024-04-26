
window.onload = init;

function init(){

    const greetBtnElement = document.getElementById("greetBtn");
  

    greetBtnElement.onclick = onGreetUserBtnClicked;
}

function onGreetUserBtnClicked(){
    //console.log(nameField.value);
    const nameField = document.getElementById("nameField");
    alert(`Hello ${nameField.value}`);
}