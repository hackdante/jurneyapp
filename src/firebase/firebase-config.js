import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { GoogleAuthProvider } from 'firebase/auth';




const firebaseConfig = {
    apiKey: "AIzaSyCwoMGDWbDtiFJWUOUD2BpZvDDd35fyn1g",
    authDomain: "territorio-journal.firebaseapp.com",
    projectId: "territorio-journal",
    storageBucket: "territorio-journal.appspot.com",
    messagingSenderId: "308104890488",
    appId: "1:308104890488:web:5575e430299013dcd1058d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const googleAuthProvider = new GoogleAuthProvider();

export {
    app,
    db,
    googleAuthProvider,
}