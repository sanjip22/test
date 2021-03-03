import React from 'react'
import Demo from './Demo'
import gallerydata from './gallerydata'

const Gallery=()=> {
    return (
        <div>
            
            {gallerydata.map(item=>
    
        <div>
        <Demo imgUrl={item.imgURL} Title={item.title} detail={item.detail}/>
        </div>
    
)}
        </div>
    )
}

export default Gallery
