import  React from 'react';
import { connect } from 'react-redux';
import Todo from './Todo';
import AddTask from './AddTask';


let App = ({ tasks }) => {
    return (
        <div>
            <ul>
                {tasks.map(task => 
                    <Todo task={task} key={task.id} />
                )}
            </ul>
            <AddTask />
        </div>
    );
}

const mapStateToProps = state => {
    return {
        tasks: state.tasks,
    };
}

App = connect(
   mapStateToProps
)(App);

export default App;