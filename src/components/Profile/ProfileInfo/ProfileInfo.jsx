import React from 'react';
import Preloader from '../../common/Preloader/Preloader';
import Status from './Staus/Status';

const ProfileInfo = props => {
    // console.log('profileinfo', props);
    const {aboutMe, contacts, fullName, lookingForAJob, lookingForAJobDescription, photos, userId} = props;
    const contactsTamplate = [];

    for (let key in contacts) {
        (!!contacts[key]) && contactsTamplate.push(
            <p key={'contact-item-' + key}><a href={contacts[key]}>{key}</a></p>
        )
    }

    return (
        !userId
        ? <Preloader />
        : (
            <div className="user-info">
                <p>
                    <strong>Имя: </strong>
                    <span>{ fullName }</span>
                </p>
                <Status
                    status={props.status}
                    getStatus={props.getStatus} 
                    updateStatus={props.updateStatus}
                    userId={userId}
                />
                { photos.small && <img src={photos.small} alt="user-avatar" /> }
                <h2>Информация о пользователе</h2>

                {
                    aboutMe &&
                    <p>
                        <strong>Обо мне: </strong>
                        <span>{ aboutMe }</span>
                    </p>
                }

                { lookingForAJob && 
                    <p>
                        <strong>Ищу работу: </strong>
                        <span>{ lookingForAJob ? 'Да' : 'Нет' }</span>
                    </p> 
                }

                { lookingForAJobDescription &&
                    <p>
                        <strong>Описание: </strong>
                        <span>{ lookingForAJobDescription }</span>
                    </p>
                }

                { contactsTamplate.length ?
                    <>
                        <hr/>
                        <h3>Контакты:</h3>
                        { contactsTamplate }
                    </>
                    : null
                }
            </div>
        )
    )
}

export default ProfileInfo;

// aboutMe: "test"
// contacts:
// facebook: "http://test.com"
// github: "http://test.com"
// instagram: "http://test.com"
// mainLink: "http://test.com"
// twitter: "http://test.com"
// vk: "http://test.com"
// website: "http://test.com"
// youtube: "http://test.com"
// __proto__: Object
// fullName: "Alexandr"
// lookingForAJob: false
// lookingForAJobDescription: "test"
// photos:
// large: "https://social-network.samuraijs.com/activecontent/images/users/5002/user.jpg?v=0"
// small: "https://social-network.samuraijs.com/activecontent/images/users/5002/user-small.jpg?v=0"
// __proto__: Object
// userId: 5002