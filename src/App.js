import React, { Component } from "react";


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

  render() {
    const personMap = this.state.persons.map((item) => (
      <Person key={item.name} name={item.name}> map object</Person>
    ));

    return (
      <div className="center">
        <h1>Hello World!!</h1>
        <p>This is working really</p>
        <hr />
        <Person name="Ab" click={this.switchNameWithArgs}>Props Children and child to patent click me!!</Person>
        <Person name="Ac" />
        <Person name="Ad" />
        <hr />
        <Counter name="Counter Stricker: " />
        <hr />
        {personMap}
        <button onClick={this.switchNameHandler}>Change Name</button>
        <button onClick={this.switchNameWithArgs.bind(this, "args1")}>Args 1</button>
        <button onClick={() => this.switchNameWithArgs("args2")}>Args 2</button>
        <hr />
        <PersonHook></PersonHook>

        <hr></hr>
        <h3>Child to parent and two way data-binding</h3>
        {this.state.twoWay}
        <TwoWayDataBinding handleChangeClick={this.handleChangeClick} handleChange={this.handleChange} twoWay={this.state.twoWay} />
      </div>
    );
  }
}

export default App;
