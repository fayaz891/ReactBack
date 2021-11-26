import React,{useEffect} from 'react'


const Useeffect1 = (props) => {
    useEffect(()=>{
    console.log("use effect of props")
    },[props.count])

    return (
        <div>
        <h1>useeffect with props</h1>
            <h1>{props.count}</h1>
            <h1>{props.data}</h1>
        </div>
    )
}

export default Useeffect1
