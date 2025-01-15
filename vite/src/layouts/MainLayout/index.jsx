import { Outlet } from "react-router-dom"
import Header from "../Header/indexx"
import Footer from "../Footer/index"

const MainLayout = () => {
  return (
    <div>
        <Header/>
    <Outlet/>
    <Footer/>
    </div>
  )
}

export default MainLayout