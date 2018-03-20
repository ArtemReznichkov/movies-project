const initialState = 'name';

export default function searchBy(state = initialState, action) {
    if (action.type === "CHANGE_SEARCH") {
        return action.value
    }
    return state;
}