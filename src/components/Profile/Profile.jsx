import React from "react";
import styles from './Profile.module.css'
import ContainerMyPosts from "./MyPosts/ContainerMyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = props => (
    <section className={styles.profile}>
        <ProfileInfo  {...props } />
        <ContainerMyPosts />
    </section>
)

export default Profile;