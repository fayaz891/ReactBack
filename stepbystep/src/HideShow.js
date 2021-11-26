import React, { useState } from "react";

const HideShow = () => {
    const [status,setStatus]=useState(true)
    return ( 
        <div style={{background:"orange"}}>
        {status?<h1>hide show</h1>:null}
        <button onClick={()=>{setStatus(false)}}>Hide</button>
        <button onClick={() => { setStatus(true) }}>show</button>

            <button onClick={() => {setStatus(!status) }}>Toggle</button>
        </div>
     );
}
 
export default HideShow;