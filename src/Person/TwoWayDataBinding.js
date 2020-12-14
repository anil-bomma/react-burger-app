import React from 'react'


const TwoWayDataBinding = (props) => {
    return (
        <div>
            <input type="text" onChange={props.handleChange} value={props.twoWay}/>
            <button onClick={() => props.handleChangeClick("Heheeh")}> Handle Change Click</button>
        </div>
    )
}

export default TwoWayDataBinding;