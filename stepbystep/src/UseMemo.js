import React,{useState,useMemo} from 'react'




function UseMemo() {
    const [count,setCount] = useState(0);
    const [item,setItem] = useState(10);


    // i called multifunctio to count only but it also called with item function there for useMemo
    // function multicount(){
    //    console.log("multicall called")
    //   return count*2
    // }

    const multicountMemo=useMemo(function multicount(){
      console.log("multicalled again")
      return count *4
    },[count])


    return (
        <div>
        <h1>Use Memo</h1>
        {/* same value of component cannot updated again and again */}
          
          <h2>count :{count}</h2>
          <h2>item :{item}</h2>
          <h2>{multicountMemo}</h2>
        <button onClick={()=>setCount(count+1)}>update count</button>
        <button onClick={()=>setItem(item*10)}>update count</button>

        </div>
    )
}

export default UseMemo
