import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase/firebase-config";
import { loadNotes } from "../../helpers/loadNotes";
import { noteTypes } from "../../types/notesTypes";




export const startLoadingNotes = (uid) => {
    return async (dispatch) => {
        const notes = await loadNotes(uid);
        dispatch(setNotes(notes))
    }
}

export const startNewNote = () => {
    return async (dispatch, getState) => {
        const state = getState();
        const uid = state.auth.uid
        const newNote = {
            title: '',
            body: '',
            date: new Date().getTime()
        }
        const newNoteRef = await addDoc(collection(db, `${uid}/journal/notes`), newNote);
        console.log('id => ', newNoteRef.id)
        dispatch(activeNote(newNoteRef.id, newNote))
    }
}

export const activeNote = (id, note) => ({
    type: noteTypes.activeNotes,
    payload: {
        id,
        ...note
    }
})

export const setNotes = (notes) => ({
    type: noteTypes.loadNotes,
    payload: notes
})