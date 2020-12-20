
const redux = require("redux");
const createStore = redux.createStore;


// intial state
intialState = {
    counter: 0
}

// reducer
const rootReducer = (state = intialState, action) => {
    if (action.type == "INC_COUNTER") {
        return {
            ...state,
            counter: state.counter + 1
        }
    }

    if (action.type == "ADD_COUNTER") {
        return {
            ...state,
            counter: state.counter + action.payload.number
        }
    }
    return state;
};

// store
const store = createStore(rootReducer);
console.log(store.getState());


// subscription
store.subscribe(() => {
    console.log("subscribe; ", store.getState())
});


// dispatching action
store.dispatch({ type: "INC_COUNTER" });
console.log("1-----", store.getState());
store.dispatch({ type: "ADD_COUNTER", payload: { number: 5 } });
console.log("2-----", store.getState());


