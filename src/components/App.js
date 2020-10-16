import React from 'react';
import Task from './Task/Task';

class App extends React.Component {
  render() {
    return (
      <div className="todo-container">
        <h1 class="todo-container__header">React ToDo list</h1>
        <Task name="Task 1" />
        <Task name="Task 2" />
        <Task name="Task 3" />
      </div>
    );
  }
}

export default App;
