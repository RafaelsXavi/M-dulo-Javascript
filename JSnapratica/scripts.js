



const input = document.querySelector("#main-input");
const select = document.querySelector("select");
const button = document.querySelector("button");

function troqueivalor(event) {
    console.log(event);
}


input.addEventListener("keypress", troqueivalor);
select.addEventListener("change", troqueivalor);
button.addEventListener("click", troqueivalor);


