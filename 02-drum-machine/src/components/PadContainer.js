import React, { Component } from 'react';

import Pad from './Pad';

import C from '../sounds/C.mp3'
import C_sharp from '../sounds/C_sharp.mp3'
import D from '../sounds/D.mp3'
import D_sharp from '../sounds/D_sharp.mp3'
import E from '../sounds/E.mp3'
import F from '../sounds/F.mp3'
import F_sharp from '../sounds/F_sharp.mp3'
import G from '../sounds/G.mp3'
import G_sharp from '../sounds/G_sharp.mp3'
import A from '../sounds/A.mp3'
import A_sharp from '../sounds/A_sharp.mp3'
import B from '../sounds/B.mp3'


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
                <Pad displayKeyBind={this.props.displayKeyBind} keyBind="Q" note="C" audio = {C}/>
                <Pad displayKeyBind={this.props.displayKeyBind} keyBind="W" note="C#" audio = {C_sharp}/>
                <Pad displayKeyBind={this.props.displayKeyBind} keyBind="E" note="D" audio = {D}/>
                <Pad displayKeyBind={this.props.displayKeyBind} keyBind="R" note="D#" audio = {D_sharp}/>
                <Pad displayKeyBind={this.props.displayKeyBind} keyBind="A" note="E" audio = {E}/>
                <Pad displayKeyBind={this.props.displayKeyBind} keyBind="S" note="F" audio = {F}/>
                <Pad displayKeyBind={this.props.displayKeyBind} keyBind="D" note="F#" audio = {F_sharp}/>
                <Pad displayKeyBind={this.props.displayKeyBind} keyBind="F" note="G" audio = {G}/>
                <Pad displayKeyBind={this.props.displayKeyBind} keyBind="Z" note="G#" audio = {G_sharp}/>
                <Pad displayKeyBind={this.props.displayKeyBind} keyBind="X" note="A" audio = {A}/>
                <Pad displayKeyBind={this.props.displayKeyBind} keyBind="C" note="A#" audio = {A_sharp}/>
                <Pad displayKeyBind={this.props.displayKeyBind} keyBind="V" note="B" audio = {B}/>
            </div>
        );
    }
}

export default PadContainer;