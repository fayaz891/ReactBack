import React,{useState} from 'react'

function Form() {
    const [fname, setfname] = useState("");
    const [lname, setlname] = useState("");
    const [email, setemail] = useState("");
    

    function submit(e) {
        e.preventDefault();
        
    }

    
    
    return (
        <div>
       
        
            <form onSubmit={submit}>
           
                <input type="text" placeholder="Enter your name" value={fname} name="fname" onChange={(e)=>{setfname(e.target.value)}}/><br/>
                <input type="text" placeholder="Enter your last name" value={lname} name="lname" onChange={(e)=>{setlname(e.target.value)}}/><br/>
                <input type="email" placeholder="Enter your email" value={email} name="email" onChange={(e)=>{setemail(e.target.value)}}/><br/>
                <button type="submit">Submit me</button>
                
            </form>
        </div>
    )
}

export default Form
