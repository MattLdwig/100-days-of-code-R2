import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Controls from './components/Controls';
import PadContainer from  './components/PadContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div id="drum-machine" className="App-drum--container">
          <Controls />
          <PadContainer />
        </div>
      </div>
    );
  }
}

export default App;
