// import React from 'react'
// import Nav from '../home/Nav'

// function Contact() {
//     return (
//         <div>
//             <Nav/>
//             <form class="container mt-5">
                
//             <div class="form-floating mb-3 ">
//   <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
//   <label for="floatingInput">Email</label>
// </div>
// <div class="form-floating ">
//   <input type="password" class="form-control" id="floatingPassword" placeholder="Password"/>
//   <label for="floatingPassword">Password</label>
// </div>
// <div class="form-floating">
//   <input type="username" class="form-control" id="floatingusername" placeholder="Username"/>
//   <label for="floatingPassword">Username</label>
// </div>
// <div class="form-floating">
//   <input type="phone" class="form-control" id="floating" placeholder="phone"/>
//   <label for="floatingPassword">Phone</label>
// </div>
// <div class="col-auto">
//     <button type="submit" class="btn btn-warning mb-3">Confirm </button>
//   </div>
  
//   </form>
//         </div>
        
//     )
// }

// export default Contact


// import React,{useState,useEffect} from 'react'
// const Contact=()=>{
// const [value,setValue]=useState(0)
//     useEffect(()=>{
//         alert('button is clicked')
//     })
//     return(
//         <>
//         <p>{value}</p>
//         <button onClick={()=>setValue(value+1)}> click</button>
//         </>
//     )
// }
// export default Contact
// import React,{useEffect, useState} from 'react'
// import axios from 'axios'
// const Contact=()=> {
//     const[post,setPost]=useState([])
//     useEffect(()=>{
//     axios.get('https://jsonplaceholder.typicode.com/posts').then(res=>{
        
//         console.log(res.data)
//         setPost(res.data)
//     })
//     .catch(err=>console.log(err))
//     })
//     return (
//         <>
//         <ul>
//             {post.slice(0,10).map(item=>
//             <li>{item.body}</li>    )}
//          </ul>  
//          </>
//     )
// }

// export default Contact
import React,{useEffect, useState} from 'react'
import axios from 'axios'
const Contact=()=> {
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
            <button onClick={()=>setLimit(limit+10)}>load more</button>
         </ul>  
        </>
    )
}

export default Contact

