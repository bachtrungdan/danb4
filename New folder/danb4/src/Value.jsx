import React from 'react'

function Value(props) {
    return (
        <div>
            <button onClick={() => { props.setCount(props.value - 1) }}>-</button>
            <button onClick={() => { props.setCount(props.value + 1) }}>+</button>
        </div>
    )
}
export default Value