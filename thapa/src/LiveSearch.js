import React,{useState} from 'react'

function LiveSearch() {
    const [data, setdata] = useState()


    return (
        <div>
            <input type="text" placeholder="search anything" value={data} onChange={(e)=>{setdata(e.target.value)}}/>
            <Searchresult name={data}/>
        </div>
    )
}

// 2nd component must required
function Searchresult(props) {
    let img=`https://source.unsplash.com/random/400x300/?${props.name}`
    return(
        <div>
            <img src={img} alt="imagess"/>
        </div>
    )
}

export default LiveSearch
