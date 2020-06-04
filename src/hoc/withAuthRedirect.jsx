import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const withAuthRedirect = (Component) => {
    const AuthRedirectContainer = props => {
        return props.isAuth 
            ? <Component {...props} /> 
            : <Redirect to="/login" />
    }

    return connect(state => ({ isAuth: state.auth.isAuth }))(AuthRedirectContainer)
}

export default withAuthRedirect;