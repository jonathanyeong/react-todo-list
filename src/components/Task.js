import React from "react";

class Task extends React.Component {
  render() {
    return (
      <div className="task">
        <p>
          {this.props.name}
        </p>
      </div>
    )
  }
}

export default Task;