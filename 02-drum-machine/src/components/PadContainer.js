import React, { Component } from 'react';

import Pad from './Pad';


const style = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr 1fr',
    gridGap: '20px',
    margin: '30px'
}

class PadContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            PadContainerStyle :style
        }
    }

    render() {
        const sounds = this.props.soundsBank;
        return(
            <div className="PadContainer" style={this.state.PadContainerStyle}>
                {sounds.map((sound) => 
                    <Pad key={sound.keyCode} displayKeyBind={this.props.displayKeyBind} soundsBank={sound} />
                )}
            </div>
        );
    }
}

export default PadContainer;