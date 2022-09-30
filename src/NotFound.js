import React from 'react'
import {useNavigate} from "react-router-dom"

const NotFound = () => {
    const  navigate = useNavigate()
    setTimeout(()=>navigate("/"), 1000)
    
  return (
    <div>
      <h1 style={{color:"red"}}>the page was not found</h1>
    </div>
  )
}

export default NotFound
