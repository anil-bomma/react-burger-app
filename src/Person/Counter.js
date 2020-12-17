import React, { Component } from 'react';

import CounterCss from "./Counter.module.css"; // bets wy to handle css 

class counter extends Component {
    state = {
        count: 0
    }
    render() {
        return (
            <div className={CounterCss.bgSalmon}>
                <h2>{this.props.name} {this.state.count}</h2>
                <button onClick={() => {
                    this.setState({ count: this.state.count + 1 })
                }}>Hit me!!</button>
            </div>
        )
    }
}

export default counter;