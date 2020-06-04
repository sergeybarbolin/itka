import React from "react";
import styles from './Header.module.css';
import { NavLink } from "react-router-dom";

const Header = ({ id, login, email, isAuth, handleLogout }) => (
    <header className={styles.header}>
        logo

        <div className={styles.user_login}>
            {isAuth 
                ? <><strong>{ email }</strong> <button onClick={handleLogout}>Выйти</button></>
                : <NavLink to="/login">Войти</NavLink>
            }
            
        </div>
    </header>
)

export default Header;