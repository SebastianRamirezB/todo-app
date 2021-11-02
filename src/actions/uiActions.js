import { types } from "../types/types"

export const changeDarkMode = (mode) => ({
    type: types.uiDarkMode,
    payload: mode
});