import React from 'react'


function SendDataChildToParent1(props) {
    const name="Fayaz rashid"
    return (
        <div>
            <h2>hh</h2>
            <button onClick={()=>props.data(name)}>Click me</button>
        </div>
    )
}

export default SendDataChildToParent1;
