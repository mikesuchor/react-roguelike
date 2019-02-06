import React, { Component } from 'react';
import './App.css';
import Health from 'Health';
import Level from 'Level';
import Weapon from 'Weapon';

class App extends Component {
  render() {
    return (
      <div>
        <Level />
        <Health />
        <Weapon />
      </div>
    );
  }
}

export default App;
