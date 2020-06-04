import { profileReducer } from "./profile-reducer";
import { dialogsReducer } from "./dialogs-reducer";

const store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, content: 'Какой то текст 1', likesCount: 3214 },
                {id: 2, content: 'Какой то текст 2', likesCount: 214 },
                {id: 3, content: 'Какой то текст 3', likesCount: 321 },
                {id: 4, content: 'Какой то текст 4', likesCount: 324 },
                {id: 5, content: 'Какой то текст 5', likesCount: 14 },
            ],
            textNewPost: '',
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Иван'},
                {id: 2, name: 'Дмитрий'},
                {id: 3, name: 'Сергей'},
                {id: 4, name: 'Артём'},
            ],
        
            messages: [
                {id: 1, text: 'Сообщение 1'},
                {id: 2, text: 'Сообщение 2'},
                {id: 3, text: 'Сообщение 3'},
                {id: 4, text: 'Сообщение 4'},
            ],

            newMessageValue: '',
        },
        sidebar: {
            friends: [
                {id: 1, name: 'Иван'},
                {id: 2, name: 'Дмитрий'},
                {id: 3, name: 'Сергей'},
                {id: 4, name: 'Артём'},
                {id: 5, name: 'Антон'},
                {id: 6, name: 'Егор'},
                {id: 7, name: 'Владислав'},
                {id: 8, name: 'Александр'},
            ]
        }
    },
    _subscriber() {
        console.log('no subscribers');
    },
    get state() {
        return this._state;
    },
    subscribe(observer) {
        this._subscriber = observer;
    },

    dispatch(action) {
        this.state.profilePage = profileReducer(this.state.profilePage, action);
        this.state.dialogsPage = dialogsReducer(this.state.dialogsPage, action);

        this._subscriber(this.state);
    }
}

export default store;