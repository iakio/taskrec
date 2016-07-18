import { createStore, combineReducers, applyMiddleware } from 'redux';
import assert from 'power-assert';

import tasks from '../src/reducers/tasks';
import { addTask, startTask, stopTask, tick } from '../src/actions';

describe('tasks', () => {
    let store;

    beforeEach(() => {
        store = createStore(tasks);
    });
    it('add task', () => {
        assert(store.getState().length === 0);

        store.dispatch(addTask('new task1'));
        assert(store.getState().length === 1);

        let new_task = store.getState()[0];
        assert(new_task.text === 'new task1');
        assert(new_task.status === 'STOP');
    });

    it('start and stop task', () => {
        store.dispatch(addTask('new task1'));
        store.dispatch(addTask('new task2'));
        let id1 = store.getState()[0].id;
        let id2 = store.getState()[1].id;

        store.dispatch(startTask(id1));
        let state = store.getState();
        assert(state[0].status === 'START');
        assert(state[1].status === 'STOP');

        store.dispatch(startTask(id2));
        state = store.getState();
        assert(state[0].status === 'STOP');
        assert(state[1].status === 'START');

        store.dispatch(stopTask(id2));
        state = store.getState();
        assert(state[0].status === 'STOP');
        assert(state[1].status === 'STOP');
    });

    it('tick', () => {
        store.dispatch(addTask('new task1'));
        store.dispatch(addTask('new task2'));
        let id1 = store.getState()[0].id;
        let id2 = store.getState()[1].id;

        let state = store.getState();
        assert(state[0].time === 0);
        store.dispatch(startTask(id1));
        store.dispatch(tick());
        state = store.getState();
        assert(state[0].time === 1);
    });
});