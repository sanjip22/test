import React,{useState} from 'react'
const Counter=()=>{
    

const  Counter=()=> {
    const[count,updateCount]=useState(0)
    return (
        <>
         <p>{count}</p>
         <button onClick={()=>updateCount(count+1)}>click me</button>
         <button onClick={()=>updateCount(count-1)}>click me</button>   
        </>
    )
}
}

export default Counter
