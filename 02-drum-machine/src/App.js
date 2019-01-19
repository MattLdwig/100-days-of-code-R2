import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Controls from './components/Controls';
import PadContainer from  './components/PadContainer';

class App extends Component {
  constructor() {
    super();

    this.displayKeyBind = this.displayKeyBind.bind(this);

    this.state = {
      keyPush: {
        key: '-'
      }
    }
  }
  displayKeyBind(callback) {
    this.setState({ 
      keyPush: callback
    })
  }

  render() {
    return (
      <div className="App">
        <div id="drum-machine" className="App-drum--container">
          <Controls display={this.state.keyPush.key} />
          <PadContainer displayKeyBind={this.displayKeyBind} />
        </div>
      </div>
    );
  }
}

export default App;
