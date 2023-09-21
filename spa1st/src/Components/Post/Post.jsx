import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

function Post({post}) {
    const {id, title} = post;
    const navigate = useNavigate()


    const UserStyle ={
        backgroundColor: "#3498db",
        border:'2px solid red',
        padding:'10px',
        borderRadius:"10px"
        }
        const handailDetails =()=>{
          navigate(`/post/${id}`)
       }
  return (
    <div style={UserStyle}>
       <h1>{id}</h1>
       <p>{title}</p>
       <button><Link to={`/post/${id}`}>Details</Link></button>
       <button onClick={handailDetails}>Click to see details</button>
    </div>
  )
}

export default Post
