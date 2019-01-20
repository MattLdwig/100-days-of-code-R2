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
        return(
            <div className="PadContainer" style={this.state.PadContainerStyle}>
                <Pad displayKeyBind={this.props.displayKeyBind} soundsBank={this.props.soundsBank.keyC}/>
                <Pad displayKeyBind={this.props.displayKeyBind} soundsBank={this.props.soundsBank.keyCs}/>
                <Pad displayKeyBind={this.props.displayKeyBind} soundsBank={this.props.soundsBank.keyD}/>
                <Pad displayKeyBind={this.props.displayKeyBind} soundsBank={this.props.soundsBank.keyDs}/>
                <Pad displayKeyBind={this.props.displayKeyBind} soundsBank={this.props.soundsBank.keyE}/>
                <Pad displayKeyBind={this.props.displayKeyBind} soundsBank={this.props.soundsBank.keyF}/>
                <Pad displayKeyBind={this.props.displayKeyBind} soundsBank={this.props.soundsBank.keyFs}/>
                <Pad displayKeyBind={this.props.displayKeyBind} soundsBank={this.props.soundsBank.keyG}/>
                <Pad displayKeyBind={this.props.displayKeyBind} soundsBank={this.props.soundsBank.keyGs}/>
                <Pad displayKeyBind={this.props.displayKeyBind} soundsBank={this.props.soundsBank.keyA}/>
                <Pad displayKeyBind={this.props.displayKeyBind} soundsBank={this.props.soundsBank.keyAs}/>
                <Pad displayKeyBind={this.props.displayKeyBind} soundsBank={this.props.soundsBank.keyB}/>
            </div>
        );
    }
}

export default PadContainer;