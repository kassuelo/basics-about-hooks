export function numberReducer(state, action) {
    switch (action.type) {
        case "numberAdd2":
            return { ...state, number: state.number + 2 };
        case "numberAddN":
            return { ...state, number: state.number + +action.payload };
        case "multiplyBy7":
            return { ...state, number: state.number * 7 };
        case "divideBy25":
            return { ...state, number: state.number / 25 };
        case "round":
            return { ...state, number: parseInt(state.number) };
        default:
            return state;
    }
}
