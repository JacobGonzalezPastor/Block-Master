import { types, typespelis } from "../types/types";

const initialState = {
    pelis: []
}

export const pelisReducer = (state = initialState, action) => {

    switch (action.type) {
        case typespelis.register:
            return {
                pelis:[action.payload]
            }
        default:
            return state;
    }
}