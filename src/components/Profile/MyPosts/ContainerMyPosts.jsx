import { connect } from 'react-redux';
import { addNewPost } from './../../../redux/profile-reducer'
import MyPosts from './MyPosts';

// const oldContainerMyPosts = () => (
//     <StoreContext.Consumer>
//         {
//             store => {
//                 const { getState, dispatch } = store;
//                 const { profilePage: { posts, textNewPost } } = getState();

//                 const createPost = () => {
//                     dispatch(addNewPost());
//                 }
//                 const changeTextNewPost = value => {
//                     dispatch(updateNewPostText(value));
//                 }

//                 return (
//                     <MyPosts
//                         newPostOnClickHandler={createPost}
//                         newPostOnChangeHandler={changeTextNewPost}
//                         newPostValue={textNewPost}
//                         posts={posts}
//                     />
//                 )
//             }
//         }
//     </StoreContext.Consumer>
// )

const ContainerMyPosts = connect(state => ({ posts: state.profilePage.posts }), { addNewPost })(MyPosts)

export default ContainerMyPosts;