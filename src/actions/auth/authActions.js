import { getAuth, updateProfile, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, signInWithPopup } from "@firebase/auth";

import { googleAuthProvider } from "../../firebase/firebase-config";
import { types } from "../../types/types"
import { finishLoading, startLoading } from "../loaders/loadersActions";
import Swal from "sweetalert2";

export const startLoginEmailPassword = (email, password) => {

    return (dispatch) => {
        dispatch(startLoading());
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password).then(({ user }) => {
            dispatch(authLogin(user.uid, user.displayName))
            dispatch(finishLoading())
        }).catch(error => {
            dispatch(finishLoading())
            Swal.fire('Error Auth!!!', error, 'error')
        })
    }
}

export const startRegisterWithEmailAndPasword = (email, password, name) => {
    return (dispatch) => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then(async ({ user }) => {
                await updateProfile(user, { displayName: name, photoURL: '' })
                dispatch(authLogin(user.uid, user.displayName))
            })
            .catch(error => {
                const errorCode = error.code;
                const errorMsg = error.message
                console.error(errorCode)
                console.error(errorMsg)
            })
    }
}

export const startGoogleLogin = () => {
    return (dispatch) => {
        const auth = getAuth()
        signInWithPopup(auth, googleAuthProvider).then(({ user }) => {
            console.log('User ====> ', user)
            dispatch(authLogin(user.uid, user.displayName))
        })
    }
}

export const authLogin = (uid, displayName) => ({
    type: types.login,
    payload: {
        uid,
        displayName
    }
});

export const startLogout = () => {
    const auth = getAuth();
    return (dispatch) => {
        signOut(auth).then(() => {
            console.log('Now is logout');
            dispatch(authLogout())
        }).catch((error) => {
            console.log('error => ', error)
        });
    }
}

export const authLogout = () => ({
    type: types.logout
})
