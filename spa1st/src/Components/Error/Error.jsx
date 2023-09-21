import { Link, useRouteError } from "react-router-dom"
import Home from "../Home/Home"


function Error() {
    const error = useRouteError()
    console.log(error)
  return (
    <div>
       <h1>OOOpsss!!!!!</h1> 
       <p>{error.statusText || error.massage}</p>
       {
        error.status === 404 && <div>
          <h2>This page not found</h2>
          <h2>Go back</h2>   
          <Link to='/'> <button>Home</button></Link>
         </div>
       }
    </div>
  )
}

export default Error
