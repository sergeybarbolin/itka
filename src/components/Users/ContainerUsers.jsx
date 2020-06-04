import React, {Component} from 'react';
import {compose} from 'redux';
import {connect} from 'react-redux';

import {fetchUsers, toggleFollow} from './../../redux/users-reducer';
import Users from './Users';
import Preloader from '../common/Preloader/Preloader';
import {
    getDisabledUsers,
    getUsers,
    getCountUsers,
    getCountElementsPerPage,
    getCurrentPage,
    getStatusFetch
} from "../../redux/users-selectors";

class CountainerUsersComponent extends Component {
    componentWillMount() {
        let {countElementsPerPage, currentPage, fetchUsers} = this.props;

        fetchUsers(countElementsPerPage, currentPage);
    }

    render() {
        return (
            this.props.isLoading
                ? <Preloader/>
                : <Users {...this.props} />
        )
    }
}

export default compose(
    connect(state => ({
        isLoading: getStatusFetch(state),
        users: getUsers(state),
        countUsers: getCountUsers(state),
        countElementsPerPage: getCountElementsPerPage(state),
        currentPage: getCurrentPage(state),
        disabledUsers: getDisabledUsers(state)
    }), {toggleFollow, fetchUsers})
)(CountainerUsersComponent)