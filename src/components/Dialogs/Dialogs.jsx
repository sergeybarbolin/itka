import React from "react";
import { NavLink } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';

import styles from './Dialogs.module.css';
import { FormControl } from '../common/FormControl/FormControl';
import { required, maxLength } from './../../utils/validate';

const maxLength10 = maxLength(10);

const DialogItem = ({ id, name }) => (
    <NavLink 
        exact 
        to={'/dialogs/' + id} 
        className={styles.dialogs_item}
        activeClassName={styles.dialogs_item_current}
    >
        { name }
    </NavLink>
)

const Message = ({ text }) => <div className={styles.messages_item}> { text } </div>

let MessageForm = ({ handleSubmit }) => (
    <form onSubmit={ handleSubmit }>
        <Field type="text" component={FormControl} validate={[required, maxLength10]} name="message" placeholder="Сообщение" /> 
        <button type="submit">Отправить</button>
    </form>
)

MessageForm = reduxForm({form: 'messageForm'})(MessageForm)

const Dialogs = props => {
    const { dialogs, messages, addMessage } = props;

    const onClickHandler = values => {
        addMessage(values.message)
    }

    return (
        <section className={styles.dialogs_wrapper}>
            <div className={styles.dialogs}>
                { dialogs.map((item) => <DialogItem key={'dialog-' + item.id} { ...item } />) }
            </div>
            <div className={styles.messages}>
                { messages.map(({ id, text }) => <Message key={'message-' + id} text={text} />) }

                <MessageForm onSubmit={ onClickHandler } />
            </div>
        </section>
    )
}

export default Dialogs;