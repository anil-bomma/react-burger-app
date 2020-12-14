import React from 'react'


const TwoWayDataBinding = (props) => {
    return (
        <div>
            <input type="text" onChange={props.handleChange} value={props.twoWay}/>
        </div>
    )
}

export default TwoWayDataBinding;