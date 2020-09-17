import React from "react";
import './task.css';

class Task extends React.Component {
  render() {
    return (
      <div className={this.props.completed ? 'task complete' : 'task incomplete'}>
        <p>
          {this.props.name}
        </p>
      </div>
    )
  }
}

export default Task;