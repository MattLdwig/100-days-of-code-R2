import React, { Component } from 'react';

import Pad from './Pad';

const style = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
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
                <Pad displayKeyBind={this.props.displayKeyBind} keyBind="Q" note="DO"/>
                <Pad displayKeyBind={this.props.displayKeyBind} keyBind="W" note="RE#"/>
                <Pad displayKeyBind={this.props.displayKeyBind} keyBind="E" note="RE"/>
                <Pad displayKeyBind={this.props.displayKeyBind} keyBind="A" note="MI#"/>
                <Pad displayKeyBind={this.props.displayKeyBind} keyBind="S" note="MI"/>
                <Pad displayKeyBind={this.props.displayKeyBind} keyBind="D" note="FA"/>
                <Pad displayKeyBind={this.props.displayKeyBind} keyBind="Z" note="SOL#"/>
                <Pad displayKeyBind={this.props.displayKeyBind} keyBind="X" note="SOL"/>
                <Pad displayKeyBind={this.props.displayKeyBind} keyBind="C" note="LA#"/>
            </div>
        );
    }
}

export default PadContainer;