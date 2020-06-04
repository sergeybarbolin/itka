import { auth } from "./auth-reducer"

const INITIALIZATION_SUCCESS = 'INITIALIZATION_SUCCESS'
export const setInitialization = () => ({ type: INITIALIZATION_SUCCESS })

export const init = () => dispatch => {
    const authPromise = dispatch(auth());

    Promise.all([authPromise]).then(() => {
        dispatch(setInitialization());
    })
}

export  const appReducer = (state = {initialized: false}, { type }) => {
    if (type === INITIALIZATION_SUCCESS) {
        return { initialized: true }
    }

    return state;
}