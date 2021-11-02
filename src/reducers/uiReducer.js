import { types } from "../types/types";
 
 const initialState = {
     
 }

export const uiReducer = (state = initialState, action) => {

    switch(action.type) {
        case types.uiDarkMode:
            return {
                ...state,
                darkModeActive: action.payload
            }
      
        default:
            return state;
    }

}