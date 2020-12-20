const reducer = (state = { counter: 1 }, action) => {

    // must update state immutabily
    // similar to hook useState not like setState (not merge will create new state)
    // 
    if (action.type == "INCEREMENT") {
        return {
            ...state,
            counter: state.counter + 1
        }
    }
    return state;
}


export default reducer;