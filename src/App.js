import React, { Component } from "react";


import Person from "./Person/Person";
import Counter from "./Person/Counter";

class App extends Component {

  state = {
    persons: [{ name: "BB" }, { name: "Bc" }],
  };

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
      </div>
    );
  }
}

export default App;
