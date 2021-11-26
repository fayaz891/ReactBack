import React,{useState} from 'react';
 
function AddContact(props) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("")
    function submit(e) {
        e.preventDefault();
        if (name==="" || email===""){alert("plz fill the complete data")}

        props.addContHandler(name)

    //     setEmail("")
    //     setName("")
    }
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h2 className="text-center">Add Contact</h2>
                       <form onSubmit={submit} className="w-50 mx-auto">
                        <div className="mb-3">
                            <label className="form-label" placeholder="Name">Name</label>
                            <input type="text" value={name} className="form-control" onChange={(e)=>{setName(e.target.value)}}/>
                            <div className="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Email</label>
                            <input type="email" value={email} className="form-control" placeholder="Email" onChange={(e)=>{setEmail(e.target.value)}}/>
                        </div>
                        
                        <button type="submit" className="btn btn-primary">Add</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddContact
