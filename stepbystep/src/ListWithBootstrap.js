import React from 'react'
import {Table} from "react-bootstrap"

function ListWithBootstrap() {
    const stu_detail=[
        {name:'fayaz',email:'abc@.com',phone:'jazz'},
        { name: 'hamad', email: 'abc@.com', phone: 'ufone' },
        { name: 'zafar', email: 'abc@.com', phone: 'telenor' },
        { name: 'mahan', email: 'abc@.com', phone: 'jazz' }
    ]

    const nestedArry=[
        {name:'fayaz',email:'abc@.com',phone:'jazz',adress:[
            {Hn:"10",city:"peshawar",country:"pakistan"},
            {Hn:"12",city:"hangu",country:"pakistan"}
        ]},
        { name: 'hamad', email: 'abc@.com', phone: 'ufone',adress:[
            {Hn:"10",city:"peshawar",country:"pakistan"},
            {Hn:"12",city:"hangu",country:"pakistan"},
            {Hn:"50",city:"kohat",country:"pakistan"}
        ] },
        { name: 'zafar', email: 'abc@.com', phone: 'telenor',adress:[
            {Hn:"10",city:"peshawar",country:"pakistan"},
            
        ] },
        { name: 'mahan', email: 'abc@.com', phone: 'jazz',adress:[
            {Hn:"10",city:"peshawar",country:"pakistan"},
           
        ] }
    ]
    return (
        <div>
            <h1>List with bootstrap</h1>
             {/* now install react bootstrap "npm install react-bootstrap Bootstrap"  now import bootstrap css to index.js
            import "bootstrap/dist/css/bootstrap.min.css"   */}
            <Table striped variant="dark">
            <tbody>
            <tr>
                <td>name</td>
                <td>email</td>
                <td>number</td>
            </tr>
              {/* the 2nd perameter is "i" which is put in <tr> which is important to remove unique key error */}
            {
                stu_detail.map((item,i)=>   
            <tr key={i}>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
            </tr>
            )}
            </tbody>
            </Table>
            <h1>nested list with nested array</h1>
            <Table striped variant="dark">
                <tbody>
                <tr>
                    <td>s.no</td>
                    <td>Name</td>
                    <td>email</td>
                    <td>phone</td>
                    <td>adress</td>
                </tr>    
                {
                    nestedArry.map((item,index)=>
                        <tr key="i">
                            <td>{index+1}</td>
                            <td>{item.name}</td>
                             <td>{item.email}</td>
                              <td>{item.phone}</td>
                               <td>
                               <Table striped variant="dark"><tbody>
                               {
                                   item.adress.map((data)=>
                                       <tr key="i">
                                           <td>{data.Hn}</td>
                                           <td>{data.city}</td>
                                           <td>{data.country}</td>
                                       </tr>
                                   )
                               }
                               </tbody>
                               </Table>
                               </td>
                        </tr>
                    )}
                </tbody>
            </Table>

           
        </div>
    )
}

export default ListWithBootstrap
