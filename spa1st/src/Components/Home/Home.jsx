import { Outlet } from "react-router-dom"
import Header from "../Header/Header"
import Foter from "../Foter/Foter"


function Home() {
  return (
    <div>
      <Header />
      <Outlet />
      <Foter />
    </div>
  )
}

export default Home
