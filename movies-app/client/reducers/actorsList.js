const initialState = [];

export default function actorsList(state = initialState, action) {
    if (action.type === "ADD_ACTOR") {
        return [...state, action.actor];
    } else if (action.type === "DELETE_ACTOR") {
        return [
                ...state.slice(0, action.index),
                ...state.slice(action.index + 1)
            ];
    } else if (action.type === "CLEAR_ACTORS_LIST") {
        return [];
    }
    return state;
}