import {INCREMENT, DECREMENT} from "./types.js";

export function rootReducer(state, action) {
    switch (action.type) {
        case INCREMENT: return state + 1;
        case DECREMENT: return state - 1;
    }
    return state
}