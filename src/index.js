import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import {Provider} from 'react-redux'

import App from './App';
import {store} from './redux/redux-store';

import * as serviceWorker from './serviceWorker';
import './index.css';

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App/>
        </Router>
    </Provider>,
    document.getElementById('root')
);

// export const renderAllTheers = () => {
//     ReactDOM.render(
//         <StoreContext.Provider value={store}>
//             <App />
//         </StoreContext.Provider>,
//         document.getElementById('root')
//     );
// } 
// renderAllTheers();
// store.subscribe(renderAllTheers);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
