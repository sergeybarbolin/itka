export const getUsers = state => state.usersPage.users;
export const getCountUsers = state => state.usersPage.countUsers;
export const getCountElementsPerPage = state => state.usersPage.countElementsPerPage;
export const getCurrentPage = state => state.usersPage.currentPage;
export const getDisabledUsers = state => state.usersPage.disabledUsers;
export const getStatusFetch = state => state.usersPage.isLoading;