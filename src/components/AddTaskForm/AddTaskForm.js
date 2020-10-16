import React from "react";

class AddTaskForm extends React.Component {
  nameRef = React.createRef();

  addTask = (event) => {
    event.preventDefault();
    this.props.addTask(this.nameRef.current.value);
    event.currentTarget.reset();
  }
  render() {
    return (
      <form onSubmit={this.addTask}>
        <input name="name" ref={this.nameRef} type="text" placeholder="Add your task" />
        <button type="submit">+ Add Task</button>
      </form>
    )
  }
}

export default AddTaskForm;