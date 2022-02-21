import {types} from '../types/types';

export const RegistroReducer = (state = {}, action) => {
    switch (action.type) {
        case types.registro:

        return{
           email: action.payload.email,
           password: action.payload.password,
           name: action.payload.name
        }

        default:
          return state;
    }
}