/* eslint-disable jsx-a11y/anchor-is-valid */

import React from "react";
import { NavLink } from 'react-router-dom';

import styles from './Sidebar.module.css'

const Sidebar = () => (
    <aside className={styles.sidebar}>
        <nav className={styles.nav}>
            <NavLink to="/profile" className={styles.link} activeClassName={styles.link_current}>Профиль</NavLink>
            <NavLink to="/dialogs" className={styles.link} activeClassName={styles.link_current}>Сообщения</NavLink>
            <NavLink to="/users" className={styles.link} activeClassName={styles.link_current}>Пользователи</NavLink>
        </nav>

        {/* <ul className="friends">
            <p>Друзья:</p>
            { state.friends.map(({id, name}) =>  <li key={id}>{ name }</li>)}
        </ul> */}
    </aside>
)

export default Sidebar;