



const input = document.querySelector("#main-input");
const select = document.querySelector("select");
const button = document.querySelector("button");

function troqueivalor(event) {
    console.log(event.target.value);
}


select.addEventListener("change", troqueivalor)



function clickButton() {
    console.log(input.value);
}


function digiteinoinput() {
    console.log("Digitei no input");
}
