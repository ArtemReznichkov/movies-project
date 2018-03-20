const initialState = [];

export default function moviesList(state = initialState, action) {
    if (action.type === "GET_LIST") {
        return action.movies;
    } else if (action.type === "SEARCH_MOVIES") {
        return action.movies;
    } else if (action.type === "DELETE_MOVIE") {
        return action.movies;
    }
    return state;
}