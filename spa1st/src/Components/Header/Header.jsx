import { NavLink } from "react-router-dom"
import './header.css'

function Header() {
  return (
    <div>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/posts">Posts</NavLink>
        <NavLink to="/contact">Contact us</NavLink>
        <NavLink to="/users">Users</NavLink>
      </nav>
    </div>
  )
}

export default Header
