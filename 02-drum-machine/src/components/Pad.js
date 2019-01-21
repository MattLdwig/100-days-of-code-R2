import React, { Component } from 'react';

class Pad extends React.Component {
    constructor() {
        super();
        this.handleBind = this.handleBind.bind(this);

    }

    componentDidMount() {
        document.addEventListener('keydown', this.checkKey);
    }

    checkKey = event => {
        if(event.keyCode === this.props.soundsBank.keyCode) {
            this.handleBind(this);
        }
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
            <div className="Pad" onClick={this.handleBind}>
            <h3>{this.props.soundsBank.keyPad}</h3>
            </div>
        );
    }
}

export default Pad;

