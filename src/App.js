import React, {Component} from 'react';
import {Route, withRouter} from 'react-router-dom';
import {compose} from "redux";
import {connect} from "react-redux";

import {init} from "./redux/app-reducer";
import ContainerHeader from './components/Header/ContainerHeader';
import Sidebar from './components/Sidebar/Sidebar';
import ContainerProfile from './components/Profile/ContainerProfile';
import ContainerDialogs from './components/Dialogs/ContainerDialogs';
import ContainerUsers from './components/Users/ContainerUsers';
import Preloader from "./components/common/Preloader/Preloader";
import Login from './components/Login/Login';

import './App.css';

class App extends Component {
    componentDidMount() {
        this.props.init();
    }

    render() {
        if (!this.props.initialized) { return <Preloader />}
        return (
            <div className="app-wrapper">
                <ContainerHeader/>
                <Sidebar/>

                <div className="app-wrapper-main">
                    <Route exact path="/profile/:userId?" component={ContainerProfile}/>
                    <Route path="/dialogs" component={ContainerDialogs}/>
                    <Route path="/users" component={ContainerUsers}/>
                    <Route path="/login" component={Login}/>
                </div>
            </div>
        );
    }
}

export default compose(
    withRouter,
    connect(state => state.app, {init})
)(App);
