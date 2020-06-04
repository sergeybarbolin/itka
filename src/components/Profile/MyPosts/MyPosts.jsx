import React from 'react';
import { Field, reduxForm } from 'redux-form';

import styles from './MyPosts.module.css';
import Post from './Post/Post';
import { FormControl } from '../../common/FormControl/FormControl';
import { required, maxLength } from './../../../utils/validate';

const maxLength300 = maxLength(300);
let FormPost = ({ handleSubmit }) => (
    <form onSubmit={ handleSubmit }>
        <Field 
            rows="5" 
            type="textarea" 
            component={ FormControl } 
            name="newPost"
            validate={[ required, maxLength300 ]}
        />
        <button type="submit">Добавить запись</button>
    </form>    
);

FormPost = reduxForm({ form: 'newpost' })(FormPost)

const MyPosts = props => {
    const { addNewPost, posts } = props;
    const submit = ({ newPost }) => {
        addNewPost(newPost);
    }

    return (
        <>
            <h1>Мои записи</h1>

            <div className={styles.post_creater}>
                <FormPost onSubmit={ submit } />
            </div>

            <div className={styles.feed}>
                { posts.map((props) => <Post key={props.id} {...props} />) }
            </div>
        </>
    )
}

export default MyPosts;