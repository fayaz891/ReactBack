import React from 'react'

const ArrayWithList = () => {
    const students=['fayaz','hamad','zafar','mahan']
    // use object for collection of information
    const stu_detail=[
        {name:'fayaz',email:'abc@.com',phone:'jazz'},
        { name: 'hamad', email: 'abc@.com', phone: 'ufone' },
        { name: 'zafar', email: 'abc@.com', phone: 'telenor' },
        { name: 'mahan', email: 'abc@.com', phone: 'jazz' },
    ]
    
    return (
        <div>
            <h1>handle arrray with list</h1>
            {
     //map is use for looping,return statement doesnot support 'for loop',thats why use map function
                students.map((item) => <h3>{'name is '+item}</h3>
                )
            }

            {/* it has in error of unique key, but in next will remove */}
             
             <table border="1">
             <tr>
                    <td>Name</td>
                    <td>Email</td>
                    <td>Phone</td>
                </tr>
            {
                stu_detail.map((item)=>
                <tr>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.phone}</td>
                </tr>
                )
            }
            </table>

        </div>
    )
}

export default ArrayWithList
