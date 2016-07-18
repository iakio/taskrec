let nextId = 0;

export const addTask = (text) => {
    return {
        type: 'ADD_TASK',
        id: nextId++,
        text
    };
};

export const startTask = (id) => {
    return {
        type: 'START_TASK',
        id
    };
};

export const stopTask = (id) => {
    return {
        type: 'STOP_TASK',
        id
    };
};

export const tick = () => {
    return { type: 'TICK' }
};
