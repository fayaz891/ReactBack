import React,{useState,useEffect} from 'react'

function NewTodo() {
    const [input, setinput] = useState("");
    const [mobile, setmobile] = useState("")
    const [marks, setmarks] = useState("")
    const [enter, setenter] = useState(getitem(),[
      {id:"1",name:"fayaz",mobile:"04030303",marks:"424"}
    ])

    const additem=()=>{
      if(input===""){alert("please enter detail")}
      else{
      return setenter([...enter,{input,marks,mobile}]);}
    }

    function removeitem(ind) {
      let data=  enter.filter((elem,id)=>{
          return ind!==id
        })
      setenter(data)
    }
    
    // save in local storege
    useEffect(() => {
       localStorage.setItem("details",JSON.stringify(enter))
    }, [enter])
    
     function getitem(){
      let data=localStorage.getItem("details")
      if(data){return JSON.parse(data)}else{
        return [] 
      }
    }

    return (
      <div>
        <form onSubmit={(e) => {e.preventDefault();}}>

          <input type="text" value={input} onChange={(e) => {setinput(e.target.value);}}/>
          <input type="text" value={mobile} onChange={(e) => {setmobile(e.target.value);}}/>
          <input type="text" value={marks} onChange={(e) => {setmarks(e.target.value);}}/>
          <button type="submit" onClick={additem}>add</button>

        </form>
        
        <table>
          <thead>
            <th>
              <td>ID</td>
              <td>Name</td>
              <td>Mobile</td>
              <td>Marks</td>
            </th>
          </thead>
          <tbody>
          {enter.map((elem, ind) => {
            return (  
           <tr key={ind}>
                  <td>{ind}</td>
                  <td>{elem.name}</td>
                  <td>{elem.mobile}</td>
                  <td>{elem.marks}</td>
                  <td><button onClick={()=>{removeitem(ind)}}>del</button></td>
               </tr> 
            );
          })}
          </tbody>
        </table>
      </div>
    );
}

export default NewTodo
