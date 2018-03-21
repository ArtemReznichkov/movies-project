const initialState = null;

export default function selectedFile(state = initialState, action) {
    if (action.type === "SELECT_FILE") {
        return action.selected;
    }
    return state;
}