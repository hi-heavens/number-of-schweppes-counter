let countValue = document.getElementById("count-el");
let count = 0

let saveEl = document.getElementById("save-el");

function increment() {
    count = count + 1;
    countValue.innerText = count;
}

function save() {
    let combine = " " + count + " - ";
    saveEl.innerText += combine;
}
