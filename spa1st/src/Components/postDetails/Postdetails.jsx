import React from 'react'
import { useLoaderData, useNavigate } from 'react-router-dom'

function Postdetails() {
    const post = useLoaderData()
    const navigate = useNavigate()
    const {id, title, body} = post;
    
    const userStyle ={
        backgroundColor:'lightblue',
        border:'2px solid blue'
      }
      
      const handelback =()=>{
        navigate(-1);
      }
  return (
    <div style={userStyle}>
       <h1>{id}</h1>
       <p>{body}</p>
       <p>{title}</p>
       <button onClick={handelback}>GO Back</button>
    </div>
  )
}

export default Postdetails
