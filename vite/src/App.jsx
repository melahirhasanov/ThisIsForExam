import { Route, Routes } from "react-router-dom"
import Header from "./Header/Header"
import MainLayout from "./layouts/MainLayout"
import Home from "./pages/Home"
import Detail from "./pages/Details/Detail"
import Add from "./pages/Add"
import NoteFound from "./pages/NofFound"
import VishList from "./pages/VishList/VishList"
import "./index.css"
function App() {

  return (
    <>
    <Routes>
    <Route path="/" element={<MainLayout/>}>
    <Route index element={<Home/>}/>
    <Route path="/vines/:id" element={<Detail/>}/>
    <Route path="/add" element={<Add/>}/>
    <Route path="/wishlist" element={<VishList/>}/>
    <Route path="*" element={<NoteFound/>}/>
    </Route>
    </Routes>
    </>
  )
}

export default App
