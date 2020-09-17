import React from 'react';
import Task from './Task';

class App extends React.Component {
  render() {
    return (
      <div className="todo-container">
        <Task completed={false} name="Task 1" />
        <Task completed={false} name="Task 2" />
        <Task completed={false} name="Task 3" />
      </div>
    );
  }
}

export default App;
