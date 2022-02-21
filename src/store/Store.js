import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import {LoginReducer} from '../redurcers/LoginReducer';
import { pelisReducer } from '../redurcers/PelisReducer';
import {RegistroReducer} from '../redurcers/RegistroReducer';

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
    login: LoginReducer,
    registro: RegistroReducer,
    peliculas: pelisReducer
})

export const store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware(thunk)
    )
)