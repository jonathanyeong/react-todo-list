import React from "react";
import './task.css';

class Task extends React.Component {
  state = {
    name: "",
    complete: false
  }

  setComplete = () => {
    const status = this.state.complete
    if (status) {
      this.setState({
        complete: false
      });
    } else {
      this.setState({
        complete: true
      });
    }
  };


  render() {
    return (
      <div className={this.state.complete ? 'task complete' : 'task incomplete'}>
        <input type="checkbox" id="complete" name="complete" onClick={this.setComplete} />
        <p>
          {this.props.name}
        </p>
      </div>
    )
  }
}

export default Task;