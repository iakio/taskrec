import  React from 'react';
import { connect } from 'react-redux';

import { startTask, stopTask } from '../actions';

let Todo = ({task, dispatch}) => {
    let hh = (task.time / 3600)|0,
        mm = (task.time / 60 % 60)|0,
        ss = (task.time % 60),
        button;
    if (task.status === 'START') {
        button = <button onClick={e => {
            dispatch(stopTask(task.id))
        }}>STOP</button>;
    } else {
        button = <button onClick={e => {
            dispatch(startTask(task.id))
        }}>START</button>;
    }
    return (
        <li>
            {task.text}
            ({hh}:{mm}:{ss})
            {button}
        </li>
    )
}

Todo = connect()(Todo);
export default Todo;