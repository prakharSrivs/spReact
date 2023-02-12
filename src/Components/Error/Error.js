import React from 'react'
import { Navigate } from 'react-router-dom'

function Error() {
  return (
    <div>
        <h1 style={{
        color:"#b9b9b9"
        }}>
            Whoops Nothing to see Here <br/>
            Page Not Found 404 
        </h1>
        <h2 style={{
        color:"#b9b9b9"
        }}>
            To Navigate back to the home page Click on the below link
        </h2>
        <a href='/home'> Home</a>
    </div>
  )
}

export default Error