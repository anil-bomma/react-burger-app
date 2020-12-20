const reducer = (state = { counter: 1 }, action) => {
    if (action.type == "INCEREMENT") {
        return {
            ...state,
            counter: state.counter + 1
        }
    }
    return state;
}


export default reducer;