import React,{useState,useRef} from 'react'

function ControlledComp() {
    const [val, setval] = useState("")
    const [item, setitem] = useState("")

    const ref = useRef(null)
    const ref1 = useRef(null)
    function submitForm(e) {
        e.preventDefault()
        document.write(ref.current.value)
        document.write(ref1.current.value)
    }
    return (
        <div>
            {/* input fields controlled through usestate called controlled comp,while when dirctly controlled
            DOM through jquery or javascript etc */}
            <h1>Controlled component</h1>
            <input type="text" value={val}  onChange={(e)=>setval(e.target.value)}/>
            <input type="text" value={item} onChange={(e)=>setitem(e.target.value)}/>

            <h2>{val},{item}</h2>

            <h1>Uncontrolled component</h1>
            {/* in uncontrolled comp we use useRef */}

            <form onSubmit={submitForm}>
                <input type="text" ref={ref}/><br/>
                <input type="text" ref={ref1}/><br/>
                <button>submit</button>
            </form>

        </div>
    )
}

export default ControlledComp
