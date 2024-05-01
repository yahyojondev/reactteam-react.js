import React from 'react'
import "../../sass/components/error.scss"
import { Link } from 'react-router-dom'

const Erorr = () => {
  return (
    <div className='container error'>
        <h3>Home / 404 Error</h3>
        <div>
            <h2>404 Not Found</h2>
            <p>Your visited page not found. You may go home page.</p>
            <Link to={`/`}>Back to home page</Link>
        </div>
    </div>
  )
}

export default Erorr