import React from 'react'

function Demo(props) {
    return (
        <div className="card" style={{width: '18rem'}}>
  <img src={props.imgUrl}className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{props.Title}</h5>
    <p className="card-text">{props.detail}</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
    )
    
}

export default Demo
