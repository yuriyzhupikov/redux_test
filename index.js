import {createStore} from "./createStore.js";
// import {createStore} from "redux";
import {rootReducer} from "./redux/rootReducer.js";

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

store.subscribe(function (){
    document.getElementById("counter").textContent = store.getStat();
});

store.dispatch({type: "INIT_APP"});