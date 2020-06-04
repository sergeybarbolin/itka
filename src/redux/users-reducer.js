import usersAPI from './../api/users';

const SET_USERS = 'SET-USERS';
const TOGGLE_FOLLOW_USER = 'TOGGLE_FOLLOW_USER';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_COUNT_USERS = 'SET_COUNT_USERS';
const TOGGLE_IS_LOADING = 'TOGGLE_IS_LOADING';
const TOGGLE_IS_DISABLED = 'TOGGLE_IS_DISABLED';

const initialState = {
    users: [],
    currentPage: 1,
    countUsers: null,
    countElementsPerPage: 10,
    isLoading: false,
    disabledUsers: [],
}

export const setUsers = users => ({type: SET_USERS, users});
export const toggleFollowUser = id => ({type: TOGGLE_FOLLOW_USER, id});
export const setCurrentPage = currentPage => ({ type: SET_CURRENT_PAGE, currentPage });
export const setCountUsers = countUsers => ({ type: SET_COUNT_USERS, countUsers });
export const toggleIsLoading = isLoading => ({ type: TOGGLE_IS_LOADING, isLoading });
export const toggleDisabledUser = userId => ({ type: TOGGLE_IS_DISABLED, userId });

export const fetchUsers = (perPage, page) => dispatch => {
    dispatch(toggleIsLoading());
    dispatch(setCurrentPage(page));
    usersAPI.getUsers(perPage, page).then(data => {
        dispatch(setUsers(data.items));
        dispatch(setCountUsers(data.totalCount));
        dispatch(toggleIsLoading());
    });
}

export const toggleFollow = (userId, followed) => dispatch => {
    dispatch(toggleDisabledUser(userId));
    if (followed) {
        usersAPI.unfollowUser(userId).then(resultCode => {
            if (resultCode === 0) {
                dispatch(toggleFollowUser(userId));
            }
            dispatch(toggleDisabledUser(userId));
        });
    } else {
        usersAPI.followUser(userId).then(resultCode => {
            if (resultCode === 0) {
                dispatch(toggleFollowUser(userId));
            }
            dispatch(toggleDisabledUser(userId));
        })
    }
}

export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS:
            return {...state, users: [...action.users]}
        case TOGGLE_FOLLOW_USER:
            const usersCopy = [...state.users]
            const userIndex = usersCopy.findIndex(user => user.id === action.id)

            usersCopy[userIndex].followed = !usersCopy[userIndex].followed;

            return {...state, users: usersCopy};
        case SET_CURRENT_PAGE:
            const { currentPage } = action;

            return {
                ...state,
                currentPage
            }
        case SET_COUNT_USERS:
            const { countUsers } = action;

            return {
                ...state,
                countUsers
                }
        case TOGGLE_IS_LOADING:
            return {
                ...state,
                isLoading: !state.isLoading
            }
        case TOGGLE_IS_DISABLED:
            const disabledUsers = [...state.disabledUsers];
            const indexCurrentUser = disabledUsers.indexOf(action.userId);

            if (indexCurrentUser === -1) {
                disabledUsers.push(action.userId);
            } else {
                disabledUsers.splice(indexCurrentUser, 1);
            }

            return {
                ...state,
                disabledUsers
            }
        default:
            return state
    }
}