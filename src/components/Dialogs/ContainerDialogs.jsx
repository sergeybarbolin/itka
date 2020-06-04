import { connect } from 'react-redux';
import { compose } from 'redux';

import { addMessage } from './../../redux/dialogs-reducer';
import withAuthRedirect from './../../hoc/withAuthRedirect';
import Dialogs from './Dialogs';

// const ContainerDialogs = () => (
//     <StoreContext.Consumer>
//         {
//             store => {
//                 const { getState, dispatch } = store;
//                 const { dialogsPage: { dialogs, messages, newMessageValue } } = getState();
            
//                 const sendMessageHandler = () => {
//                     dispatch(addMessageActionCreator())
//                 }
            
//                 const changeInputHandler = value => {
//                     dispatch(updateMessageTextActionCreator(value));
//                 }
            
//                 return <Dialogs {...{ dialogs, messages, newMessageValue, sendMessageHandler, changeInputHandler }} />
//             }
//         }
//     </StoreContext.Consumer>
// )

export default compose(
    withAuthRedirect,
    connect(state => state.dialogsPage, { addMessage })
)(Dialogs)