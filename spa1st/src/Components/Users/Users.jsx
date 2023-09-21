import { useLoaderData } from "react-router-dom"
import User from "../User/User";
import './users.css'

function Users() {
    
    const users = useLoaderData();

  return (
    <div>
      <h1>This users:{users.length}</h1>
      <div className="Lalllalo">
        {
            users.map(user =><User user={user}/>)
        }
      </div>
    </div>
  )
}

export default Users
