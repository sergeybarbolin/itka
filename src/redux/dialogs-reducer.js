const initState = {
    dialogs: [
        {id: 0, name: 'Иван'},
        {id: 1, name: 'Дмитрий'},
        {id: 2, name: 'Сергей'},
        {id: 3, name: 'Артём'},
    ],

    messages: [
        {id: 0, text: 'Сообщение 1'},
        {id: 1, text: 'Сообщение 2'},
        {id: 2, text: 'Сообщение 3'},
        {id: 3, text: 'Сообщение 4'},
    ]
}

const ADD_MESSAGE = 'ADD-MESSAGE';

export const addMessage = message => ({ type: ADD_MESSAGE, message });

export const dialogsReducer = (state = initState, action) => {
    switch (action.type) {        
        case ADD_MESSAGE:
            let { messages,  } = state

            return {
                ...state,
                newMessageValue: '',
                messages: [...messages, { id: messages.length, text: action.message }]
            };
        
        default:
            return state;
    }
}