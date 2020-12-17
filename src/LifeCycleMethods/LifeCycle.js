import React, { Component } from 'react';
import ContainerComponent from "./ContainerComponent";


class LifeCycle extends Component {

    // 1) constructor used to initilize state and props 
    // don't forget to add super(props)
    constructor(props) {
        super(props);
        console.log('1) [LifeCycle.js] constructor');

        // this.state = {
        //     prop: "prop1"
        // };
    }

    // modren way of writting code
    state = {
        prop: "prop1",
        arr: [1, 2, 3, 4]
    };

    // this will be rarly used to update the state when props changes
    static getDerivedStateFromProps(props, state) {
        console.log('2) [LifeCycle.js] getDerivedStateFromProps', props);
        return state;
    }

    /* 
    // very rarly used will be removed in future
    // deprecated we use getDerivedStateFromProps instead
    componentWillMount() {
        console.log("5) [LifeCycle.js] componentWillMount");
    } 
    */

    // here we can make http calls and setup timmers
    // but don't update the state here as it will result infinty loop with re-render
    componentDidMount() {
        console.log("5) [LifeCycle.js] componentWillMount deprecated we use getDerivedStateFromProps instead");
        console.log("6) [LifeCycle.js] componentDidMount");
    }

    deleteFromArr = (index) => {
        console.log("index---", index)
        let newArr = this.state.arr;
        newArr.splice(index, 1);
        this.setState({
            arr: newArr
        });
    }


    // executes render with other child components rendering
    render() {
        console.log("3) [LifeCycle.js] render");
        console.log("4) Child rendering..");

        return (
            <div>
                <h1> LIFE CYCLE METHODS</h1>
                <ContainerComponent arr={this.state.arr} remove={(i) => this.deleteFromArr(i)}></ContainerComponent>
            </div>
        )
    }


}

export default LifeCycle;