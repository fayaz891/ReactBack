import React, { useEffect,useState } from 'react'

function APIdelete() {
    const [data, setdata] = useState([]);
    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [mobile, setmobile] = useState("")

  useEffect(()=>{
       autorefresh() 
  },[])

  function autorefresh() {
      fetch("url").then((result)=>{
        result.json().then((response)=>{
            console.log(response)

            setdata(response)
            setname(response[0].name)
            setemail(response[0].email)
            setmobile(response[0].mobile)
        })
    })
  }

  function deleteuser(id) {
      alert(id)
      fetch(`url${id}`,{
          method:"DELETE"
      }).then((result)=>{
          result.json().then((response)=>{
              console.log(response+"deleted")
              autorefresh()
          })
      })
  }

  console.log(data)
    return (
        <div>
            <h2>API DELETE</h2>

            <table border="1">
                <tr>
                    <td>ID</td>
                    <td>name</td>
                    <td>email</td>
                    <td>mobile number</td>
                </tr>
                <tbody>
                    {
                        data.map((item)=>
                 <tr>
                    <td>{item.userid}</td>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.mob}</td>
                    <td><button onClick={()=>{deleteuser(item.id)}}>delete api</button></td>
                </tr>)
                    }
                </tbody>
            </table>

            <h2>Pre-Filled Form</h2>
            <input type="text" value={name}/> <br/>
            <input type="text" value={email}/> <br/>
            <input type="text" value={mobile}/> <br/>

            <button>update user</button>
        </div>


    )
}



export default APIdelete
