import React, { useState } from "react";

const GetInput = () => {
    const [data,setData]=useState(null);
    const[print,setPrint]=useState(false);
    
    function getData(val) {
        console.log(val.target.value);
        setData(val.target.value)
        setPrint(false)
    }
    return ( 
        <div style={{background:"skyblue"}}>
        {
                print? <h1>{data}</h1>:null
        }
            <input type="text" onChange={getData} style={{background:"skyblue"}}/>
            <button onClick={()=>{setPrint(true)}}>
                print data
            </button><br/>
        <Thapainput/>

        </div>
     );
     
}



function Thapainput() {
    const [name, setname] = useState();
    const [fullname, setfullname] = useState()

    function getname(e) {
        setname(e.target.value);
    }

    function fname() {
        setfullname(name)
    }

    return (
        <div>
        <h3>{fullname}</h3>
            <input type="text" onChange={getname} value={name}/>
            <button onClick={fname}>submit</button>
        </div>
    )
}



 
export default GetInput;