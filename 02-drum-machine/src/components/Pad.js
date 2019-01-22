import React, { Component } from 'react';

class Pad extends React.Component {
    constructor() {
        super();
        this.state =  {
            padActive: false
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
        this.setState({ padActive: !this.state.padActive})
    }
    
    handleBind = event => {
        const keyBind = {
            key: this.props.soundsBank.note,
            noteToPlay: this.props.soundsBank.sound
        }
        this.props.displayKeyBind(keyBind)
    }

    render() {
        return(
            <div className={`Pad ${this.state.padActive ? 'active' : 'innactive'}`} style={this.state.pad} onClick={this.handleBind}>
            <h3>{this.props.soundsBank.keyPad}</h3>
            </div>
        );
    }
}

export default Pad;

