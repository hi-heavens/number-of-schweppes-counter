let countValue = document.getElementById("count-el");
let count = 0


function increment() {
    count = count + 1;
    countValue.innerText = count;
}

function save() {
    console.log(count);
}
