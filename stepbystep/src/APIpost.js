import React,{useState} from 'react'

function APIpost() {
    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [mobile, setmobile] = useState("");

    function saveuser() {
        // console.log(name,email,mobile)
        let data={name,email,mobile}
        fetch("url",{
            method:"POST",
            header:{
                "Accept":"application/json",
                "content-Type":"application/json"
            },

            body:JSON.stringify(data)
        }).then((result)=>{
            // console.log(result)
            result.json().then((response)=>{
                console.log(response)
            })
        })
    }
    return (
        <div style={{backgroundColor:"forestgreen"}}>
            <h2>API POST</h2>
            <input type="text" value={name} onChange={(e)=>{setname(e.target.value)}} name="name"/><br/>
            <input type="text" value={email} onChange={(e)=>{setemail(e.target.value)}} name="email"/><br/>
            <input type="text" value={mobile} onChange={(e)=>{setmobile(e.target.value)}} name="mobile"/><br/>

            <button type="button" onClick={saveuser}>save new user</button>
        </div>
    )
}

export default APIpost
