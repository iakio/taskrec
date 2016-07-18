function tasks(state = [], action) {
    switch (action.type) {
        case 'ADD_TASK':
        return [
            ...state,
            {
                text: action.text,
                id: action.id,
                status: 'STOP',
                time: 0
            }
        ];
        case 'START_TASK':
        return state.map((task) => {
            return Object.assign({}, task, {
                status: action.id === task.id ? 'START' : 'STOP'
            });
        });
        case 'STOP_TASK':
        return state.map((task) => {
            return action.id === task.id ?
                Object.assign({}, task, { status: 'STOP' })
                :
                task;
        });
        case 'TICK':
        return state.map((task) => {
            return task.status === 'START' ?
                Object.assign({}, task, { time: task.time + 1 })
                :
                task;
        });
    }
    return state;
}

export default tasks;