// parentComponent => childA => childB => childC
//  parent data directly passed/access to childC USING contextapi, not using props to props to props
// 1) createContext   2)provider   3)consumer

import React, { createContext, useContext } from 'react'


const MyName = createContext()
const mobile = createContext()

function ContextApi() {

    return (
        <div>
        <MyName.Provider value={"Fayaz Rashid"}>
          <mobile.Provider value={"10th"}>
              <ChildA/>
          </mobile.Provider>           
        </MyName.Provider>
        </div>
    )
}

//  export {MyName,Class};




function ChildA() {
    return(
        <ChildB/>
    )
}

function ChildB() {
    return(
        <ChildC/>
    )
}




//  import {MyName,Class} from "ContextApi"
function ChildC() {
    const Name = useContext(MyName);
    const mob = useContext(mobile)
    return(
    <>
    <h1>name {Name}</h1>
    <h2>Mobile {mob}</h2>

        <h3>This is child C which is access by main component using contextAPI,
        These components are not in same file ,these all are different files</h3>
     
    </>
    )
}

export default ContextApi
