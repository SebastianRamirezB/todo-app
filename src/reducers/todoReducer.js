import { types } from "../types/types";

const initialState = {
    notes: []
}

export const todoReducer = (state = initialState, action) => {

    switch(action.type) {
        case types.noteAddNew:
            return {
                ...state,
                notes: [
                    ...state.notes,
                    action.payload
                ]
            }

        case types.noteLoaded: 
            return {
                ...state,
                notes: [
                    ...action.payload
                ]
            }
        case types.notesLogoutCleaning:
            return {
                ...state,
                notes: []
            }
        case types.noteDeleted:
            return {
                ...state,
                notes: state.notes.filter(n => (n.id !== action.payload))
            
            }
    
        default:
            return state;
    }
}