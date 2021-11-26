import React,{useRef} from 'react'
import ForwardRef from './ForwardRef';

function UseRef() {
    const inputref = useRef(null)

    function handleinput() {
        console.log("ggggg")
        inputref.current.value="100"
        inputref.current.focus()
        inputref.current.style.backgroundColor="red"
    }
    
    const forwardRef=useRef(null)

    function updateRef() {
        forwardRef.current.value="100";
        forwardRef.current.focus()
        forwardRef.current.style.color="red"
    }
    return (
        <div>
            <h1>usRef</h1>
               {/* directly manepolate DOM focus,color,value handle with useRef */}
            {/* react says dont use it mostly,it mostly is used in form only,dont use otherwhere  */}
         
            <input type="text" ref={inputref}/>

            <button onClick={handleinput}>handle input</button>

            <h2>forwardRef</h2>
            {/* if button and input are in different components then will access DOM using forwardRef */}

            <button onClick={updateRef}>update inputbox in child component</button>
            <ForwardRef ref={forwardRef}/>
        </div>
    )
}

export default UseRef
