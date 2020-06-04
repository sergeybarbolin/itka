import authAPI from './../api/auth';
import {stopSubmit} from "redux-form";

const SET_AUTH_DATA = 'SET_AUTH_DATA';
const TOGGLE_IS_AUTH = 'TOGGLE_IS_AUTH';

const initialState = {
    id: null,
    login: null,
    email: null,
    isAuth: false
}

export const setAuthData = (id, login, email) => ({
    type: SET_AUTH_DATA,
    id,
    login,
    email
})
export const toggleIsAuth = () => ({ type: TOGGLE_IS_AUTH });

export const auth = () => dispatch => {
    return authAPI.getMe().then(authData => {
        if (authData.resultCode === 0) {
            const { id, login, email } = authData.data;

            dispatch(setAuthData(id, login, email));
            dispatch(toggleIsAuth())
        }
    })
}

export const loginUser = userData => dispatch => {
    authAPI.login(userData).then(loginResponse => {
        if (loginResponse.resultCode === 0) {
            dispatch(auth());
        } else {
            dispatch(stopSubmit('login', {_error: loginResponse.messages[0]}));
        }
    })
}

export const logoutUser = () => dispatch => {
    authAPI.logout().then().then(data => {
        if (data.resultCode === 0) {
            dispatch(setAuthData(null, null, null));
            dispatch(toggleIsAuth())
        }
    })
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_DATA:
            const { id, login, email } = action;
            
            return {
                ...state,
                id,
                login,
                email,
            }
        case TOGGLE_IS_AUTH:
            return {
                ...state,
                isAuth: !state.isAuth
            }
    
        default:
            return state;
    }
}