import { types } from "../types/types"

export const LoginReducer = (state = {}, action) => {
    switch (action.type) {
        case types.login:
            return {
                id: action.payload.id,
                name: action.payload.displayname
            }

        case types.logout:
            return {}

        default:
            return state
    }
}