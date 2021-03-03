import React,{useState,useEffect} from 'react'

    const Counter1=()=>{
    const [value,setValue]=useState(0)
    useEffect(()=>{
        alert('button is clicked')
    },[value])
    return(
        <>
        <p>{value}</p>
        <button onClick={()=>setValue(value+1)}> click</button>
        </>
    )
}
export default Counter1