import React, { Component } from 'react';

class Pad extends React.Component {
    constructor(props) {
        super(props);
        this.state =  {
            padActive: false,
            activeBank: props.soundsBank.note
        }
        this.handleBind = this.handleBind.bind(this);
        this.activePad = this.activePad.bind(this);
    }

    componentDidMount() {
        document.addEventListener('keydown', this.checkKey);
    }

    componentWillUnmount() {
        document.removeEventListener('keydown', this.checkKey);
    }

    checkKey = event => {
        if(event.keyCode === this.props.soundsBank.keyCode) {
            this.setState({ isKeyPush: true })
            this.handleBind(this);
            this.activePad()
            setTimeout(() => this.activePad(), 200)
        }
    }

    activePad() {
        if(this.props.power) { 
            this.setState({ padActive: !this.state.padActive})
        }
    }
    
    handleBind = event => {
        const keyBind = {}
        keyBind.key = this.props.bank ? this.props.soundsBank.note : this.props.soundsBank.drum;
        keyBind.noteToPlay = this.props.bank ? this.props.soundsBank.pianoSound : this.props.soundsBank.drumSound;
        keyBind.keyPad = this.props.soundsBank.keyPad;
        this.props.displayKeyBind(keyBind)
    }

    render() {
        return(
            <div className={`Pad drum-pad ${this.state.padActive ? 'active' : 'innactive'}`} id={this.props.soundsBank.pianoSound} style={this.state.pad} onClick={this.handleBind}>
            <audio className='clip' id={this.props.soundsBank.keyPad} src={`${this.props.bank ? this.props.soundsBank.pianoSound : this.props.soundsBank.drumSound}`}></audio>
            <h3>{this.props.soundsBank.keyPad}</h3>
            </div>
        );
    }
}

export default Pad;

