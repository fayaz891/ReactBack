import React from 'react'

function Greeting() {

     const time= new Date().getHours(16);
    let  greeting="";
    let cssstyle={};

     if (time >= 1 && time <= 11){greeting="Good Morning";cssstyle.color="orange"}else
     if (time >= 12 && time <= 18){greeting="Good Afternoon";cssstyle.color="green"}else
       {greeting="Good Night";cssstyle.color="yellow"}

    return (
   <>
     <div className="greeting">
      <h1 style={{borderRadius:"10px",backgroundColor:"skyblue",width:"30%",height:"10%"}}>
       Hello Sir,
      <span style={cssstyle}>{greeting}</span>
     </h1>
     </div>
   </>
    )
}

export default Greeting
