import React,{useState,useEffect} from 'react'
import axios from "axios"

function APIcall() {
    const [num, setnum] = useState()
    const [name, setname] = useState()
    const [moves, setmoves] = useState()
    

    useEffect(() => {
        async function getapi() {
        let res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`)
        console.log(res)
        
        setname(res.data.name)
        setmoves(res.data.moves.length)
    }

    getapi()
    })

    return (
        <div>
            <h1>API call {num}</h1>
            <p>value {name}</p>
            <p>moves {moves}</p>
            <select value={num} onChange={(e)=>{setnum(e.target.value);}}>
                <option value={"1"}>1</option>
                <option value={"2"}>2</option>
                <option value={"3"}>3</option>
                <option value={"4"}>4</option>
                <option value={"5"}>5</option>
            </select>
        </div>
    )
}

export default APIcall
