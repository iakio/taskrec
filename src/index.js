import  React from 'react';
import { render } from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import App from './components/App';
import tasks from './reducers/tasks';
import { tick } from './actions';

const todoApp = combineReducers({
    tasks
});

let store = createStore(
    todoApp
);

setInterval(() => {
    store.dispatch(tick());
}, 1000);

render(
    <Provider store={store}>
        <App />
    </Provider>
    ,
    document.getElementById('root')
);