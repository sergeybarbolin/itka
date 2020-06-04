import React from 'react';
import Pagination from "./Pagination/Pagination";
import { NavLink } from 'react-router-dom';
// import styles from './Users.module.css'

const User = ({ id, name, status, city, country, followed, toggleFollow, disabledUsers }) => {
    return (
    <div className='user_item'>
        <p>
            <NavLink to={'/profile/' + id}><strong>{ name }</strong></NavLink> 
        </p>
        { status && 
            <p>
                <strong>Статус: </strong>
                <span>{ status }</span>
            </p> 
        }
        { (city || country) && <p>Место проживания: <i>{ city + ' ' + country }</i></p> }
        <button 
            onClick={() => { toggleFollow(id, followed) }}
            disabled={ disabledUsers.includes(id) }
        >
            { followed ? 'Отписаться' : 'Подписаться' }
        </button>
    </div>
)};

const Users = props => {
    const { users, countUsers, countElementsPerPage, currentPage, disabledUsers, fetchUsers, toggleFollow } = props;

    return (
        <>
            { countUsers && <Pagination 
                countElements={countUsers} 
                countElementsPerPage={countElementsPerPage} 
                onClickHandler={fetchUsers}
                currentPage={currentPage} /> 
            }
            <section className="users">
                { users.map(user => (
                    <User 
                        key={user.id} 
                        {...user} 
                        disabledUsers={disabledUsers}
                        toggleFollow={toggleFollow}
                    />
                ))}
            </section>
        </>
    )
}
export default Users;