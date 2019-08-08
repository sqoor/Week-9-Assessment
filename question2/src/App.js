import React, { Component } from 'react';
import UserInput from './components/UserInput';
import UserOutput from './components/UserOutput';
import './App.css'

class App extends Component {
  state = {
    username: 'alsqoor'
  }

  changeName = (newName) => {
    this.setState({
      username: newName
    });
  }

  render() {
    const { username } = this.state;

    return (
      <div className="container">
        <UserInput changeName={this.changeName} />
        <UserOutput username={username} />
      </div>
    );
  }
}

export default App;
