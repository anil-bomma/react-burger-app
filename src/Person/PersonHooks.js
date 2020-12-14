import React, { useState } from "react";

const PersonHook = () => {

    const [personState, setPersonState] = useState({
        person: [
            { name: "Anil", age: 12 },
            { name: "Sam", age: 21 }
        ]
    });

    const setAge = () => {
        setPersonState({
            person: [
                { name: "Anil B", age: 12 },
                { name: "Sam A", age: 21 }
            ]
        });
    }
    
    const personMap = personState.person.map(
        item => <p key={item.name}>Name: {item.name}, Age: {item.age}</p>
    );

  
    return (
        <div>
            {personMap}
            <button onClick={setAge}>Change Hook</button>
        </div>
    )

}

export default PersonHook;