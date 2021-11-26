import React,{useState} from 'react'

function HOC() {
    return (
        <div style={{backgroundColor:"skyblue"}}>
            <h1>High Order Component</h1>
            <Counter/>
            <HOCred Cmp={Counter}/>
            <HOCgreen Cmp={Counter}/>
            <HOCblue Cmp={Counter}/>
            

        </div>
    )
}

// HOC means it always take component is an input nd also component as in output having some more informations

function HOCred(props) {
    return(
        <div>
        <h3>red counter</h3>
        <h4 style={{backgroundColor:"red",width:"100px"}}>red<props.Cmp/></h4>
        </div>
    )
}

function HOCgreen(props) {
    return(
        <div>
        <h3>green counter</h3>
        <h4 style={{backgroundColor:"green",width:"100px"}}>green<props.Cmp/></h4>
        </div>
    )
}

function HOCblue(props) {
    return(
        <div>
        <h3>green counter</h3>
        <h4 style={{backgroundColor:"blue",width:"100px"}}>blue<props.Cmp/></h4>
        </div>
    )
}

function Counter() {
    const [count, setcount] = useState(0)
    return(
        <div>
            <h2>{count}</h2>
            <button onClick={()=>{setcount(count+1)}}>update</button>
        </div>
    )
}

export default HOC
