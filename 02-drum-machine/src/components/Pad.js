import React, { Component } from 'react';

class Pad extends React.Component {
    constructor() {
        super();
    }
    handleBind = event => {
        const keyBind = {
            key: this.props.note,
            url: this.props.audioUrl
        }
        this.props.displayKeyBind(keyBind)

        const audio = new Audio(this.props.audio);
        audio.play()
    }

    render() {
        return(
            <div className="Pad" onClick={this.handleBind}><h3>{this.props.keyBind}</h3></div>
        );
    }
}

export default Pad;