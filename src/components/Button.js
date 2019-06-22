import React,{useState} from 'react'
import './Button.scss'
export default function Button(props) {

    let myClick=()=>{

    }
    return(
        <button className='button' onClick={props.onclick}><span className="text">{props.children}</span></button>
    )
}
