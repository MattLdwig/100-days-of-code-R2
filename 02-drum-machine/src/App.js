import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Controls from './components/Controls';
import PadContainer from  './components/PadContainer';

import C from './sounds/C.wav'
import C_sharp from './sounds/C_sharp.wav'
import D from './sounds/D.wav'
import D_sharp from './sounds/D_sharp.wav'
import E from './sounds/E.wav'
import F from './sounds/F.wav'
import F_sharp from './sounds/F_sharp.wav'
import G from './sounds/G.wav'
import G_sharp from './sounds/G_sharp.wav'
import A from './sounds/A.wav'
import A_sharp from './sounds/A_sharp.wav'
import B from './sounds/B.wav'

class App extends Component {
  constructor() {
    super();

    this.displayKeyBind = this.displayKeyBind.bind(this);
    this.playSound = this.playSound.bind(this);
    this.switchPower = this.switchPower.bind(this);
    this.switchBank = this.switchBank.bind(this);

    this.state = {
      power: false,
      keyPush: {
        key: '-',
        noteToPlay: ''
      },
      currentPiano: true,
      soundsBank: [
        {
          note: 'C',
          keyCode: 81,
          sound: C,
          keyPad: 'q'
        },
        {
          note: 'C#',
          keyCode: 87,
          sound: C_sharp,
          keyPad: 'w'
        },
        {
          note: 'D',
          keyCode: 69,
          sound: D,
          keyPad: 'e'
        },
        {
          note: 'D#',
          keyCode: 82,
          sound: D_sharp,
          keyPad: 'r'
        },
        {
          note: 'E',
          keyCode: 65,
          sound: E,
          keyPad: 'a'
        },
        {
          note: 'F',
          keyCode: 83,
          sound: F,
          keyPad: 's'
        },
        {
          note: 'F#',
          keyCode: 68,
          sound: F_sharp,
          keyPad: 'd'
        },
        {
          note: 'G',
          keyCode: 70,
          sound: G,
          keyPad: 'f'
        },
        {
          note: 'G#',
          keyCode: 90,
          sound: G_sharp,
          keyPad: 'z'
        },
        {
          note: 'A',
          keyCode: 88,
          sound: A,
          keyPad: 'x'
        },
        {
          note: 'A#',
          keyCode: 67,
          sound: A_sharp,
          keyPad: 'c'
        },
        {
          note: 'B',
          keyCode: 86,
          sound: B,
          keyPad: 'v'
        }
      ]
    }
  }

  playSound() {
    const audio = new Audio(this.state.keyPush.noteToPlay);
    audio.currentTime = 0;
    audio.play()
  }

  switchPower() {
    this.setState({ power: !this.state.power })
  }

  switchBank() {
    this.setState({ currentPiano: !this.state.currentPiano })
  }

  displayKeyBind(callback) {
    if (this.state.power) {
      this.setState({ keyPush: callback}, () => {
        this.playSound();
    })
    }
  }

  render() {
    return (
      <div className="App">
        <div id="drum-machine" className="App-drum--container">
          <Controls display={this.state.keyPush.key} 
                    switchPower={this.switchPower} 
                    powerState={this.state.power} 
                    bank={this.state.currentPiano}
                    switchBank={this.switchBank} />
          <PadContainer displayKeyBind={this.displayKeyBind} soundsBank={this.state.soundsBank}/>
        </div>
      </div>
    );
  }
}

export default App;
