import { getDocs, collection } from "firebase/firestore";
import { db } from "../firebase/firebase-config";

//import { getFirestore } from "firebase/firestore";

export const loadNotes = async (uid) => {
    const notesSnap = await getDocs(collection(db, `${uid}/journal/notes`));
    const notes = []
    notesSnap.forEach(docNote => {
        notes.push({
            id: docNote.id,
            ...docNote.data()
        })
    })
    return notes

}
