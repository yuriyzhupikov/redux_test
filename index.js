const counter = document.getElementById('counter');
const addBtn = document.getElementById("add");
const subBtn = document.getElementById("sub");
const asyncBtn = document.getElementById("sub");

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
    setTimeout(() => {
        state++;
    }, 1000);
})


function render() {
    counter.textContent = state.toString();
}

render();