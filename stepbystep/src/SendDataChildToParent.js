import React from 'react'
import SendDataChildToParent1 from './SendDataChildToParent1';

// props is used to send data from parent to child
// here we know how to send data from child to parent

function SendDataChildToParent() {
    function Parentalert(name) {
        alert(name)
    }
    return (
        <div style={{backgroundColor:"skyblue"}}>
            <h1>Send data from child to parent or lifting state up</h1>

            <SendDataChildToParent1 data={Parentalert}/>
        </div>
    )
}

export default SendDataChildToParent
