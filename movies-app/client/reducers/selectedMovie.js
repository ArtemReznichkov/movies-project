const initialState = {};

export default function selectedMovie(state = initialState, action) {
    if (action.type === "SELECT_MOVIE") {
        return action.selected;
    }
    return state;
}