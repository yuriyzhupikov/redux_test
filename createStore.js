export function createStore() {
    const state = {};
    const subcribers = [];
    return {
        dispatch() {

        },
        subscribe(cb) {
            subcribers.push(cb);
        },
        getStat() {
            return state;
        }
    }
}