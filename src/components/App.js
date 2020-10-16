import React from 'react';
import Task from './Task/Task';
import AddTaskForm from './AddTaskForm/AddTaskForm';

class App extends React.Component {
  state = {
    tasks: {},
  }

  addTask = (name) => {
    const tasks = {...this.state.tasks}
    tasks[`task${Date.now()}`] = {name: name};
    this.setState({
      tasks
    });
  };

  render() {
    return (
      <div className="todo-container">
        <h1 class="todo-container__header">React ToDo list</h1>
        <Task name="Task 1" />
        <Task name="Task 2" />
        <Task name="Task 3" />
        {Object.keys(this.state.tasks).map(key => <Task key={key} index={key} name={this.state.tasks[key].name} />)}

        <AddTaskForm addTask={this.addTask} />
      </div>
    );
  }
}

export default App;
