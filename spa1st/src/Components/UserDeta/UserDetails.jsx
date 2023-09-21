import { useLoaderData } from "react-router-dom"


function UserDetails() {
  const user = useLoaderData()
  const {name, website, username, phone} = user;
  const userStyle ={
    backgroundColor:'lightblue',
    border:'2px solid blue'
  }
  return (
    <div style={userStyle} >
      <h2>Details About Users:{name}</h2>
      <h2> website:{website}</h2>
      <h2> phone:{phone}</h2>
      <h2> website:{username}</h2>
    </div>
  )
}

export default UserDetails
