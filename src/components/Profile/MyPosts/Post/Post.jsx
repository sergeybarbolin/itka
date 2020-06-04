import React from 'react';
import styles from './Post.module.css';

const Post = ({ content, likesCount = 0 }) => (
    <div className={styles.post}>
        <p className={styles.text}>{ content }</p>
        <p>Количество лайков: <span className={styles.like}>{ likesCount }</span></p>
    </div>
)

export default Post;