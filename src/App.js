import React, { Component } from "react";
import UserOutput from "./UserOutput";

export class App extends Component {
  state = {
    username: "Kwame",
    showState: false
  };

  manpltStateHandler = event => {
    this.setState({
      username: event.target.value
    });
  };
  toggleHandler = () => {
    const doseShow = this.state.showState;
    this.setState({ showState: !doseShow });
  };

  render() {
    const style = {
      backgroundColor: "red",
      border: "2px solid green",
      fontSize: "15px",
      color: "white"
    };
    let allStates = null;
    if (this.state.showState) {
      allStates = (
        <div>
          <UserOutput
            username={this.state.username}
            manpltStateHandler={this.manpltStateHandler}
          />
          <UserOutput />
        </div>
      );
    }
    return (
      <div>
        {allStates}
        <button style={style} onClick={this.toggleHandler}>
          Toggle
        </button>
      </div>
    );
  }
}

export default App;
