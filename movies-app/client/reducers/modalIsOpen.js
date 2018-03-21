const initialState = false;

export default function modalIsOpen(state = initialState, action) {
    if (action.type === "CLOSE_POPUP") {
        return false;
    } else if (action.type === "OPEN_POPUP") {
        return true;
    }
    return state;
}