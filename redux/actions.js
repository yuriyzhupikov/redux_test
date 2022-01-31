import {ASYNC_INC, DECREMENT, INCREMENT} from "./types.js";

export function increment() {
    return {
        type: INCREMENT
    }
}

export function decrement() {
    return {
        type: DECREMENT
    }
}

export function async_inc() {
    return {
        type: ASYNC_INC
    }
}