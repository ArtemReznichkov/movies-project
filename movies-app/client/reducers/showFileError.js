const initialState = false;

export default function showFileError(state = initialState, action) {
    if (action.type === "FILE_ERROR_SHOW") {
        return true;
    }else if (action.type === "FILE_ERROR_HIDE") {
        return false;
    }
    return state;
}