import { useState } from "react";

const Form = () => {
    const[name,setname]=useState("");
    const[termCond,settermCon]=useState(false);
    const[intrest,setintrest]=useState("");

    // const[loggedIn,setloggedIn]=useState(1);

    function getformdata(e) {
        console.log(name,intrest,termCond)
        e.preventDefault()
    }
    return ( 
        <>
            <div style={{ background: "skyblue" }}>
        <h1>Basic Form</h1>
        <form onSubmit={getformdata}>
        <input type="text" placeholder="enter data" onChange={(e)=>{setname(e.target.value)}}/><br/><br/>
             <select onChange={(e) => { setintrest(e.target.value) }}>
                <option>select option</option>
                <option>jazz</option>
                <option>telenor</option>
                <option>ufone</option>
            </select>
            <br/><br/>
            <input type="checkbox" onChange={(e) =>{ settermCon(e.target.checked) }}/><span>accept term and condition</span>

            <button type="submit">submit</button>

        </form>
        {/* <div> */}
        {/* if else if else condition should write below */}
        {/* {loggedIn===1?<h1>first condition</h1>
        :loggedIn===2?<h1>2nd condition</h1>
        :<h1>3rd condition</h1> }
        </div> */}
        </div>

        </>
     );
}
 
export default Form;