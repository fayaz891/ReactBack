import React,{useState} from 'react'

 function Bg() {
    let purple="#8e44ad"
    const [bg, setbg] = useState(purple);
    const [name,setname] = useState("Click me")

    function changColor() {
        let red="#34495e"
      setbg(red)
      setname("nice to met you")
      
      }

    return (
        <div>
            <div style={{backgroundColor:bg,height:"5rem"}}>
                <button onClick={changColor}>{name}</button>
            </div>
        </div>
    )
}

export default Bg;