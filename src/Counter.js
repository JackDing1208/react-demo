import React,{useState} from 'react'

function Counter(props) {
    const [n,set]=useState(props.number)
    const plus=()=>{
        set(n+1)
    }
    const sayHi=()=>{
        alert('hello')
    }
    return(
        <div>
            <div>{props.name}</div>
            <span>{n}</span>
            <button onClick={plus}>+1</button>
            <button onClick={sayHi}>hi</button>
        </div>
    )
}

export default Counter
