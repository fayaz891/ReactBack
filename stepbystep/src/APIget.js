import React, { useEffect,useState } from 'react'

function APIget() {
    const [data, setdata] = useState([])

  useEffect(()=>{
        fetch("url").then((result)=>{
        result.json().then((response)=>{
            console.log(response)

            setdata(response)
        })
    })
  },[])

  console.log(data)
    return (
        <div>
            <h2>API GET</h2>

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
                </tr>)
                    }
                </tbody>
            </table>
        </div>
    )
}

export default APIget
