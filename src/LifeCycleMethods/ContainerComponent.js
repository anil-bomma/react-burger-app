import React, { Component } from 'react'

class ContainerComponent extends Component {

    // load first
    constructor(props) {
        super(props);
        console.log('4.1) [ContainerComponent.js] constructor-=--', props);
    }

    state = {};

    // 2) load used to sync state with new props
    static getDerivedStateFromProps(props, state) {
        console.log('4.2) [ContainerComponent.js] getDerivedStateFromProps', props);
        return state;
    }

    // 3) based on this it will decide to re-render or not
    shouldComponentUpdate(nextProps, nextState) {
        console.log('4.3) [ContainerComponent.js] shouldComponentUpdate');
        return true;
    }

    // 5) used instead of componentWillReceiveProps 
    // used to save info like scroll postion before dom update 
    // these values will be used in the ComponentDidUpdate
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('4.5) [ContainerComponent.js] getSnapshotBeforeUpdate snapped!!');
        return { message: "snpshoot !!" }
    }

    // 6 widly used
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('4.6) [ContainerComponent.js] componentDidUpdate');
        console.log("----prevProps: ", prevProps);
        console.log("----prevState: ", prevState);
        console.log("----snapshot: ", snapshot);
     }

     // 4) render will be executed
    render() {
        console.log("4.4) [ContainerComponent.js] render");
        return (
            <div>
                Child Component is render from ContainerComponent!!
                ===={this.state.arr}
                {
                    this.props.arr.map((i, index) =>
                        <p onClick={() => this.props.remove(index)} key={index}> ---- {i}</p>
                    )
                }
            </div>
        )
    }

}


export default ContainerComponent;
