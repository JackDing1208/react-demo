import React,{useState} from 'react'

function Counter() {
    const [n,setn]=useState(0)
    const plus=()=>{
        setn(n+1)
    }
    return(
        <div>
            <span>{n}</span>
            <button onClick={plus}>+1</button>
        </div>
    )
}

export default Counter
