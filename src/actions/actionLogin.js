import { getAuth, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { google } from "../firebase/firebaseConfig";
import { types } from "../types/types";

export const loginCorreoContAsync = (email, password) => {
    return(dispatch) => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
        .then(({usuario}) => {
            console.log(usuario);
        })
        .catch(error => {
            console.log(error);
        })
    }
}

export const InicioGoogleAsync = () => {
    return(dispatch) => {
        const auth = getAuth();
        signInWithPopup(auth, google)
        .then(({usuario}) => {
            dispatch(loginSincrono(usuario.uid, usuario.displayName))
        })
        .catch(error => {
            console.log(error);
        })
    }
}

// export const loginFacebookAsync = () => {
//     return() => {
//         const auth = getAuth();
//         signInWithPopup(auth, facebook)
//         .then(usuario => {
//             console.log(usuario);
//         })
//         .catch(error => {
//             console.log(error);
//         })
//     }
// }

export const loginSincrono = (id, displayname) => {
    return {
        type: types.login,
        payload: {
            id, displayname
        }
    }
}

export const desconectarseAsync = () => {
    return( dispatch) => {
        const auth = getAuth();
        signOut(auth)
        .then(usuario => {
            dispatch(desconectarseSync())
        })
        .catch(error => {
            console.log(error)
        })
    }
}

export const desconectarseSync = () => {
   return{
       type: types.logout,
       payload: {}
   }
}