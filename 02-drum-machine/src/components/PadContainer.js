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
                <Pad keyBind="Q"/>
                <Pad keyBind="W"/>
                <Pad keyBind="E"/>
                <Pad keyBind="A"/>
                <Pad keyBind="S"/>
                <Pad keyBind="D"/>
                <Pad keyBind="Z"/>
                <Pad keyBind="X"/>
                <Pad keyBind="C"/>
            </div>
        );
    }
}

export default PadContainer;