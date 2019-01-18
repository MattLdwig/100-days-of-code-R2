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
    fontSize: '4em',
    padding: '0 20px'
}

const displayStyle = {
    borderTop: '2px solid #00FEC6',
    borderBottom: '2px solid #00FEC6',
    height: '100%',
    width: '100%',
    display: 'grid',
    alignItems: 'center',
    fontSize: '28px'
}

const instrumentsStyle = {
    width: '100%',
    height: '100%'
}

const switchContainerStyle = {
    width: '100%',
    height: '100%',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
}

const switchStyle = {
    border: 'none',
    background: '#00FEC6',
    width: '100%',
    height: '100%',
    textAlign: 'center',
    gridColumn: '1 / -1',
    color: '#FFF',
    fontSize: '28px'
}

const buttonSelectionStyle = {
    border: 'none',
    background: '#00FEC6',
    width: '100%',
    height: '100%',
    textAlign: 'center',
    color: '#FFF',
    fontSize: '28px',
}

const offButton = {
    width: '100%',
    height: '100%',
    border: 'none',
    textAlign: 'center',
    color: '#FFF',
    fontSize: '28px',
    background: '#67fedd',
    opacity: '0.2'
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
                    <h2>{this.props.display}</h2>
                </div>
                <div className="PadControls--selection" style={switchContainerStyle}>
                    <button className="PadControls--piano" style={offButton}>&#x1F3B9;</button>
                    <button className="PadControls--saxo" style={buttonSelectionStyle}>&#x1F3B7;</button>
                </div>
                <div className="PadControls--switch" style={switchContainerStyle}>
                    <button style={switchStyle}>&#x25B6;</button>
                </div>
            </div>
        );
    }
}

export default Controls;