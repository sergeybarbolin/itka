import React, { Component } from 'react';
import { connect } from 'react-redux';

import Header from './Header';
import { logoutUser } from './../../redux/auth-reducer';

class ContainerHeaderComponent extends Component {
    logout = () => {
        this.props.logoutUser();
    }

    render() {
        const { id, login, email, isAuth } = this.props;

        return <Header {...{id, login, email, isAuth}} handleLogout={this.logout} />
    }
}

const ContainerHeader = connect(state => state.auth, { logoutUser })(ContainerHeaderComponent);

export default ContainerHeader;
