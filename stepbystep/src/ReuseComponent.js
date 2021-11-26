import React from 'react'
import ReuseComponent1 from './ReuseComponent1'


function ReuseComponent() {
      const users= [
        {name:"fayaz",class:"10th",contact:"jazz"},
         {name:"zafar",class:"10th",contact:"ufon"},
          {name:"hamad",class:"9th",contact:"jazz"}
    ]
    
    return (
        <div>
            <h1>Re Use component</h1>
            {users.map((item,i)=><h1>
                <ReuseComponent1 data={item}/>
            </h1>)}
           
        </div>
    )
}

export default ReuseComponent
