import React, { Component } from "react";
import Radium, { StyleRoot } from "radium"; // used to add inline css, pseduo syle an media query
import styled from 'styled-components';


import Person from "./Person/Person";
import Counter from "./Person/Counter";
import PersonHook from "./Person/PersonHooks";
import TwoWayDataBinding from "./Person/TwoWayDataBinding";


class App extends Component {

  // when ever state changes react will re-redner the dom with new state
  state = {
    persons: [{ name: "BB" }, { name: "Bc" }],
    name: "asas",
    i: 0,
    twoWay: "Hi"
  };

  switchNameHandler = () => {
    this.setState({
      persons: [{ name: "CB" + this.state.i }, { name: "Bc" }],
      i: this.state.i + 1
    });
  }

  switchNameWithArgs = (args) => {
    console.log(args)
    this.setState({
      persons: [{ name: args + " " + this.state.i }, { name: "Bc" }],
      i: this.state.i + 1
    });
  }

  handleChange = (e) => {
    this.setState({
      twoWay: e.target.value
    });
  }

  handleChangeClick = (args) => {
    this.setState({
      twoWay: args
    });
  }

  deleteHandler = (index) => {
    const p = this.state.persons;
    p.splice(index, 1);
    this.setState({
      persons: p
    });
  }

  render() {
    const personMap = this.state.persons.map((item, index) => (
      <Person key={item.name} name={item.name} deletePar={() => this.deleteHandler(index)}> map object</Person>
    ));

    const style = {
      padding: "50px"
    }


    const btn = {
      backgroundColor: "green",
      color: "white",
      ':hover': {
        backgroundColor: "lightgreen",
        color: "black",
      }
    }
    return (
      <StyleRoot>
        <div style={style}>
          <h1>{this.props.appName}</h1>
          <p>This is working really</p>
          <hr />
          <Person name="Ab" click={this.switchNameWithArgs}>Props Children and child to patent click me!!</Person>
          <Person name="Ac" click={this.switchNameWithArgs} />
          <Person name="Ad" click={this.switchNameWithArgs} />
          <hr />
          <Counter name="Counter Stricker: " />
          <hr />
          {personMap}
          <button style={btn} onClick={this.switchNameHandler}>Change Name</button>
          <button onClick={this.switchNameWithArgs.bind(this, "args1")}>Args 1</button>
          <button onClick={() => this.switchNameWithArgs("args2")}>Args 2</button>
          <hr />
          <PersonHook></PersonHook>

          <hr></hr>
          <h3>Child to parent and two way data-binding</h3>
          {this.state.twoWay}
          <TwoWayDataBinding handleChangeClick={this.handleChangeClick} handleChange={this.handleChange} twoWay={this.state.twoWay} />
        </div>
      </StyleRoot>
    );
  }
}

export default Radium(App); // this higger order function
