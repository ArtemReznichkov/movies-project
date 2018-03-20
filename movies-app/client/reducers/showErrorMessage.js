const initialState = false;

export default function showErrorMessage(state = initialState, action) {
    if (action.type === "ERROR_MESSAGE_SHOW") {
        return true;
    }else if (action.type === "ERROR_MESSAGE_HIDE") {
        return false;
    }
    return state;
}