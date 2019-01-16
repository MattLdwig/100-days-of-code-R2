import React, { Component } from 'react';

const style = {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gridGap: '20px',
    gridTemplateRows: '3fr 1fr 1fr 1fr',
    alignItems: 'center',
    justifyItems: 'center',
    color: '#FFF',
    borderRight: '2px solid #00FEC6'
}

const titleStyle = {
    fontSize: '4em'
}

const displayStyle = {
    borderTop: '2px solid #00FEC6',
    borderBottom: '2px solid #00FEC6',
    height: '100%',
    width: '100%'
}

const instrumentsStyle = {
    width: '100%',
    height: '100%'
}

const switchContainerStyle = {
    width: '100%',
    height: '100%'
}

const switchStyle = {
    border: 'none',
    background: '#00FEC6',
    width: '100%',
    height: '100%'
}

class Controls extends React.Component {
    constructor() {
        super();
        this.state = {
            PadControlsStyle :style
        }
    }
    render() {
        return(
            <div className="PadControls" style={this.state.PadControlsStyle}>
                <h1 style={titleStyle}>Drum Machine</h1>
                <div id="display" className="PadControls--display" style={displayStyle}>
                    <h2>F</h2>
                </div>
                <div className="PadControls--selection" style={switchContainerStyle}>
                    <select className="PadControls--selection-instruments" name="instruments" style={switchStyle}>
                        <option value="piano">Piano</option>
                    </select>
                </div>
                <div className="PadControls--switch" style={switchContainerStyle}>
                    <button style={switchStyle}>Play</button>
                </div>
            </div>
        );
    }
}

export default Controls;