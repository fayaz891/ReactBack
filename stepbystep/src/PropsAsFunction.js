import React from "react"
const PropsAsFunction = (props) => {
    return ( 
        <>
        <h1>pass function as props</h1>
        <button onClick={props.data}>call data function</button>
        </>
     );
}
 
export default PropsAsFunction;