import profileAPI from './../api/profile';

const initState = {
    profile: null,
    isLoading: false,
    posts: [
        {id: 0, content: 'Какой то текст 1', likesCount: 3214 },
        {id: 1, content: 'Какой то текст 2', likesCount: 214 },
        {id: 2, content: 'Какой то текст 3', likesCount: 321 },
        {id: 3, content: 'Какой то текст 4', likesCount: 324 },
        {id: 4, content: 'Какой то текст 5', likesCount: 14 },
    ],
    status: ''
}

const ADD_POST = 'ADD-POST';
const SET_PROFILE = 'SET_PROFILE';
const TOGGLE_IS_LOADING_USER = 'TOGGLE_IS_LOADING_USER';
const SET_STATUS = 'SET_STATUS';

export const addNewPost = text => ({ type: ADD_POST, text });
export const setProfile = data => ({ type: SET_PROFILE, data });
export const toggleIsLoading = () => ({ type: TOGGLE_IS_LOADING_USER });
export const setStatus = status => ({ type: SET_STATUS, status });

export const getProfile = id => dispatch => {
    dispatch(toggleIsLoading());
    
    profileAPI.get(id).then(profile => {
        dispatch(setProfile(profile));
        dispatch(toggleIsLoading());
    })
}

export const getStatus = userId => dispatch => {
    profileAPI.getStatus(userId).then(statusValue => {
        dispatch(setStatus(statusValue));
    })
}

export const updateStatus = statusValue => dispatch => {
    profileAPI.setStatus(statusValue).then(data => {
        if (data.resultCode === 0) {
            dispatch(setStatus(statusValue));
        }
    })
}

export const profileReducer = (state = initState, action) => {
    switch (action.type) {
        case ADD_POST: 
            let { posts } = state;

            return {
                ...state,
                textNewPost: '',
                posts: [
                    ...posts,
                    {
                        id: posts.length,
                        content: action.text,
                        likesCount: 0
                    }
                ]
            }
        case SET_PROFILE: 
            return { ...state, profile: action.data };
        case TOGGLE_IS_LOADING_USER:
            return { ...state, isLoading: !state.isLoading };
        case SET_STATUS:
            return { ...state, status: action.status }
            
        default:
            return state;
    }
}