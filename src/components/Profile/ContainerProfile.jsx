import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router";
import { compose } from 'redux';

import Profile from './Profile';
import { getProfile, getStatus, updateStatus } from './../../redux/profile-reducer';
import {Redirect} from "react-router-dom";

class ContainerProfileComponent extends Component {
    componentDidMount() {
        const userId = this.props.match.params.userId ? this.props.match.params.userId : this.props.me.id
        userId && this.props.getProfile(userId);
    }

    render() {
        const userId = this.props.match.params.userId ? this.props.match.params.userId : this.props.me.id

        return (userId)
            ? <Profile {...this.props.profile} status={this.props.status} getStatus={this.props.getStatus} updateStatus={this.props.updateStatus} />
            : <Redirect to="/login"/>
    }
}

export default compose(
    withRouter, 
    connect(state => ({...state.profilePage, me: {...state.auth}}), { getProfile, getStatus, updateStatus })
)(ContainerProfileComponent)