import React from 'react'
import {Link,Route} from 'react-router-dom'
import DynamicUser from './DynamicUser'

function DynamicRouting() {
    let users=[
        {id:1,name:'fayaz',email:'fayaz@gmail.com'},
        {id:2,name:'hamad',email:'hamad@gmail.com'},
        {id:3,name:'zafar',email:'zafar@gmail.com'},
        {id:4,name:'ayaz',email:'ayaz@gmail.com'},
    ]
    return (
        <div>
            <h1>dynamic routing</h1>
            

            {
                users.map((item)=>
                <div><Link to={"/user"+item.id}> <h3>{item.name}</h3>    </Link></div>)
            }

            <Route path="./DynamicUser/:id">  <DynamicUser/> </Route>  

          
        </div>
    )
}




export default DynamicRouting
