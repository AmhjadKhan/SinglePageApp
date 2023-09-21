import { Link } from "react-router-dom";


function User({user}) {
    // console.log(user)
    const {id, phone,username, name, email} = user;
    const UserStyle ={
        backgroundColor: "#3498db",
        border:'2px solid red',
        padding:'10px',
        borderRadius:"10px"
        }
  return (
    <div style={UserStyle}>
       <h2>{username}</h2>
       <h2>{name}</h2>
       <h2>{phone}</h2>
       <h3>{email}</h3>
       <Link to={`/user/${id}`}>Show Details</Link>
    </div>
  )
}

export default User
