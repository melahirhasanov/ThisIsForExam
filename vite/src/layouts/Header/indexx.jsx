import React from 'react'
import { NavLink } from 'react-router-dom'
import style from "./indexx.module.css"
const Header = () => {
  return (
    <div className={style.container}>
      <div className={style.header}>
        <img className={style.logo} src='https://preview.colorlib.com/theme/immigration/img/logo.png'/>
      <header>
      <nav>
        <ul>
          <li>
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li>
            <NavLink to={"/wishlist"}>WishList</NavLink>
          </li><li>
            <NavLink to={"/add"}>Add</NavLink>
          </li>
          <li>
            <NavLink to={"/"}>About</NavLink>
          </li>
          <li>
            <NavLink to={"/"}>immigration</NavLink>
          </li><li>
            <NavLink to={"/"}>Courses</NavLink>
          </li>
        </ul>
      </nav>
    </header>
      </div>
    </div>
  )
}

export default Header