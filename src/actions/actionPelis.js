import { typespelis } from "../types/types";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";


export const registropelisAsync =(titulo, genero, calificacion, urlTrailer, sinopsis, poster) =>{
    return(dispatch)=>{
        const nuevaPeli = {
            titulo, genero, calificacion, urlTrailer, sinopsis, poster
        }
        addDoc(collection(db, "peliculas"),nuevaPeli).then(resp=>{
            dispatch(registropelissincrono(nuevaPeli));
        })
        .catch(error=>{
            console.log(error);
        })
}
}


export const registropelissincrono = (peliculas) => {
    return {
        type: typespelis.register,
        payload: peliculas
    }


}