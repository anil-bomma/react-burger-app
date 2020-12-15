import React from "react";

import "./Person.css"

const person = (props) => {
    return (
        <div className="Person">
            <div onClick={() => props.click("args3")}>{props.name} -- {props.children}
            </div>
            <br />
            <button onClick={props.deletePar}>delete</button>
        </div>
    )
}

export default person;