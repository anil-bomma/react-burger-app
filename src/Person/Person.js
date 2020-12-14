import React from "react";

const person = (props) => {
    return (
    <div>{props.name} -- {props.children}</div>
    )
}

export default person;