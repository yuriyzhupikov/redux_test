const counter = document.getElementById('counter');
const addBtn = document.getElementById("add");
const subBtn = document.getElementById("sub");
const asyncBtn = document.getElementById("async");
const themeBtn = document.getElementById("theme");

let state = 0;

addBtn.addEventListener('click', function () {
    state++;
    render();
});

subBtn.addEventListener('click', function () {
    state--;
    render();
});

asyncBtn.addEventListener('click', function () {
    setTimeout(function (){
        state++;
        render();
    }, 1000);
});

themeBtn.addEventListener('click', function () {
    document.body.classList.toggle('dark');
});


function render() {
    counter.textContent = state.toString();
}

render();