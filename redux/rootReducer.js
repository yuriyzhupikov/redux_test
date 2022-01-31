import {INCREMENT, DECREMENT, ASYNC_INC} from "./types.js";

export function rootReducer(state, action) {
    switch (action.type) {
        case INCREMENT: return state + 1;
        case DECREMENT: return state - 1;
        case ASYNC_INC: return setTimeout(function () {
            return state + 1;
        }, 1000);
    }
    return state
}