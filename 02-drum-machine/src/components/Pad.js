import React, { Component } from 'react';

const style = {
    width: '200px',
    height: '200px',
    borderRadius: '100%',
    border: '2px solid #fff',
    display: 'grid',
    alignItems: 'center',
    justifyItems: 'center',
    fontSize: '48px',
    color: '#fff'
}

class Pad extends React.Component {
    constructor() {
        super();
        this.state = {
            PadStyle :style
        }
    }
    render() {
        return(
            <div className="Pad" style={this.state.PadStyle}><h3>{this.props.keyBind}</h3></div>
        );
    }
}

export default Pad;