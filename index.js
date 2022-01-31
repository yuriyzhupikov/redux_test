import {createStore} from "./createStore";
import {rootReducer} from "./redux/rootReducer";

const addBtn = document.getElementById("add");
const subBtn = document.getElementById("sub");
const asyncBtn = document.getElementById("async");
const themeBtn = document.getElementById("theme");

const store = createStore(rootReducer, 0);

addBtn.addEventListener('click', function () {
    store.dispatch({type: "INCREMENT"});
});

subBtn.addEventListener('click', function () {
    store.dispatch({type: "DECREMENT"});
});

asyncBtn.addEventListener('click', function () {

});

themeBtn.addEventListener('click', function () {

});