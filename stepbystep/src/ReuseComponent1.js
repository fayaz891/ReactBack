import React from 'react'



function ReuseComponent1(props) {
  
    return (
        <div>
      
             <span>{props.data.name}</span>
             <span> {props.data.class}</span>
             <span> {props.data.contact}</span>
        </div>
    )
}

export default ReuseComponent1
