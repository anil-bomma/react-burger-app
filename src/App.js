import Person from "./Person/Person";
import Counter from "./Person/Counter";

function App() {
  return (
    <div className="center">
      <h1>Hello World!!</h1>
      <p>This is working really</p>
      <hr />
      <Person name="Ab">Props Children</Person>
      <Person name="Ac"/>
      <Person name="Ad"/>
      <hr />
      <Counter name="Counter Stricker: "/>
    </div>
  );
}

export default App;
