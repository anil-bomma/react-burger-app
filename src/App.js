import Person from "./Person/Person";

function App() {
  return (
    <div className="center">
      <h1>Hello World!!</h1>
      <p>This is working really</p>
      <hr />
      <Person name="Ab">Props Children</Person>
      <Person name="Ac"/>
      <Person name="Ad"/>

    </div>
  );
}

export default App;
