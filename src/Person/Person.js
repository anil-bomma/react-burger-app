import React from "react";

const person = (props) => {
    return (
        <div>
            <div onClick={() => props.click("args3")}>{props.name} -- {props.children}</div>
        </div>
    )
}

export default person;