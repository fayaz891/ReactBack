import { useState } from "react";

const Prop = (props) => {
    const [data,setdata]=useState(props.name)
    const [datas,setdatas]=useState(0)
    

    return ( 
<div style={{backgroundColor:"yellow", padding:0}}>

    <h1>{data}</h1>
    <button onClick={()=>{return setdata("yeah this is")}}>
        update me
    </button>
    <h1>{datas}</h1>
    
     <button onClick={() => { return setdatas(datas+1) }}>
            update me
    </button>
    <br/><br/><br/>
   
</div>
     );
}
 
export default Prop;