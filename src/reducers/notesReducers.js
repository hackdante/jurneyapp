import { noteTypes } from "../types/notesTypes";

const initialState = {
    notes: [],
    active: null
}


export const notesReducers = (state = initialState, action) => {
    switch (action.type) {

        case noteTypes.activeNotes:
            return {
                ...state,
                active: {
                    ...action.payload
                }
            }

        case noteTypes.loadNotes:
            return {
                ...state,
                notes: [...action.payload]
            }

        default:
            return state;
    }
}
