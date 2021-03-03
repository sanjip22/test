import React,{useEffect, useState} from 'react'
import axios from 'axios'
const Datafetch=()=> {
    const[post,setPost]=useState([])
    const [limit,setLimit]=useState(10)
    useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/posts').then(res=>{
        
        console.log(res.data)
        setPost(res.data)
    })
    .catch(err=>console.log(err))
    })
    return (
        <>
        <ul>
            {post.slice(0,limit).map(item=>
            <li>{item.body}</li>    )}
            { limit < post.length && <button onClick={()=>setLimit(limit+10)}>load more</button>}
         </ul>  
        </>
    )
}

export default Datafetch
