export function createStore(rootReducer, initialState) {
    let state = rootReducer(initialState, {type: "__INIT_APP__"});
    const subscribers = [];
    return {
        dispatch(action) {
            state = rootReducer(state, action)
            subscribers.forEach(subscriber => subscriber());
        },
        subscribe(cb) {
            subscribers.push(cb);
        },
        getStat() {
            return state;
        }
    }
}