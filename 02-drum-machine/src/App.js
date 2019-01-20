import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Controls from './components/Controls';
import PadContainer from  './components/PadContainer';

import C from './sounds/C.wav'
import C_sharp from './sounds/C_sharp.mp3'
import D from './sounds/D.mp3'
import D_sharp from './sounds/D_sharp.mp3'
import E from './sounds/E.mp3'
import F from './sounds/F.mp3'
import F_sharp from './sounds/F_sharp.mp3'
import G from './sounds/G.mp3'
import G_sharp from './sounds/G_sharp.mp3'
import A from './sounds/A.mp3'
import A_sharp from './sounds/A_sharp.mp3'
import B from './sounds/B.mp3'

class App extends Component {
  constructor() {
    super();

    this.displayKeyBind = this.displayKeyBind.bind(this);
    this.handleKey = this.handleKey.bind(this);

    this.state = {
      keyPush: {
        key: '-',
        noteToPlay: ''
      },
      soundsBank: {
        keyC: {
          note: 'C',
          keyCode: 81,
          sound: C
        },
        keyCs: {
          note: 'C#',
          keyCode: 87,
          sound: C_sharp
        },
        keyD: {
          note: 'D',
          keyCode: 69,
          sound: D
        },
        keyDs: {
          note: 'D#',
          keyCode: 82,
          sound: D_sharp
        },
        keyE: {
          note: 'E',
          keyCode: 65,
          sound: E
        },
        keyF: {
          note: 'F',
          keyCode: 83,
          sound: F
        },
        keyFs: {
          note: 'F#',
          keyCode: 68,
          sound: F_sharp
        },
        keyG: {
          note: 'G',
          keyCode: 70,
          sound: G
        },
        keyGs: {
          note: 'G#',
          keyCode: 90,
          sound: G_sharp
        },
        keyA: {
          note: 'A',
          keyCode: 88,
          sound: A
        },
        keyAs: {
          note: 'A#',
          keyCode: 67,
          sound: A_sharp
        },
        keyB: {
          note: 'B',
          keyCode: 86,
          sound: B
        }
      }
    }
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKey);
  }

  handleKey() {
    const audio = new Audio(this.state.keyPush.noteToPlay);
    audio.currentTime = 0;
    audio.play()
  }


  displayKeyBind(callback) {
    this.setState({ 
      keyPush: callback
    }, () => {
      this.handleKey();
    })
  }

  render() {
    return (
      <div className="App">
        <div id="drum-machine" className="App-drum--container">
          <Controls display={this.state.keyPush.key} />
          <PadContainer displayKeyBind={this.displayKeyBind} soundsBank={this.state.soundsBank}/>
        </div>
      </div>
    );
  }
}

export default App;
