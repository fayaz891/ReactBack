import React,{useEffect,useState} from 'react'
import Useeffect1 from './Useeffect1'

const Useeffect = (props) => {
    const [data, setdata] = useState(0)
    const [count, setcount]=useState(100)

    // useEffect also run when update state
    useEffect(()=>{
        console.log('it is call with data'+data)
    },[data])

    useEffect(() => {
        console.log('it is called with count'+count)
    },[count])


    return (
        <div style={{background:"orange"}}>
            <h1>UseEffect in react</h1>
            <h3>{data}</h3>
            <h3>{count}</h3>
            <button onClick={()=>{setdata(data+1)}}>
                update data
            </button>
            <button onClick={()=>{setcount(count+1)}}>
                update count
            </button>
            <br/><br/>
            
            <Useeffect1 data={data} count={count}/>
        </div>
    )
}

export default Useeffect
