import { types } from "../types/types";
import { fetchWithToken } from "../helpers/fetch";


export const noteStartAddNew = (note) => {
    return async (dispatch) => {

        
        try {
            const resp = await fetchWithToken('notes', {text: note}, 'POST');
            const body = await resp.json();
            
            if(body.ok){
                dispatch(noteAddNew(body.note));
            }

        } catch (error) {
            console.log(error);
        }

    }
}

const noteAddNew = (note) => ({
    type: types.noteAddNew,
    payload: note
});

export const noteStartLoading = () => {
    return async (dispatch) => {

       try {
           const resp = await fetchWithToken('notes');
           const body = await resp.json();

           const notes = body.notes;

           dispatch(notesLoaded(notes));

           
       } catch (error) {
           console.log(error);
       }

    }
}

const notesLoaded = (notes) => ({
    type: types.noteLoaded,
    payload: notes
})

export const noteStartDelete = (id) => {
    return async (dispatch) =>{

        try {
            const resp = await fetchWithToken(`notes/${id}`,{},'DELETE');
            const body = await resp.json();

            if(body.ok) {
                dispatch(noteDeleted(id));
            } else {
                alert('Error al eliminar');
            }

        } catch (error) {
            console.log(error);
        }

    }
}

const noteDeleted = (id) => ({
    type: types.noteDeleted,
    payload: id
});
export const noteStartCompleted = (id, completed) => {
    return async (dispatch) => {
        
        try {
             await fetchWithToken(`notes/${id}`, {completed: !completed}, 'PUT');
            dispatch(noteStartLoading());
            
        } catch (error) {
            console.log(error);
        }
    }
}

export const noteLogout = () => ({
    type: types.notesLogoutCleaning

});