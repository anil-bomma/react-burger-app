import React, { Component } from "react";


import Person from "./Person/Person";
import Counter from "./Person/Counter";
import PersonHook from "./Person/PersonHooks";


class App extends Component {

  // when ever state changes react will re-redner the dom with new state
  state = {
    persons: [{ name: "BB" }, { name: "Bc" }],
    name: "asas",
    i: 0
  };

  switchNameHandler = () => {
    this.setState({
      persons: [{ name: "CB" + this.state.i }, { name: "Bc" }],
      i: this.state.i + 1
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
        <Person name="Ab">Props Children</Person>
        <Person name="Ac" />
        <Person name="Ad" />
        <hr />
        <Counter name="Counter Stricker: " />
        <hr />
        {personMap}
        <button onClick={this.switchNameHandler}>Change Name</button>
        <hr />
        <PersonHook></PersonHook>
      </div>
    );
  }
}

export default App;
