import React from 'react'
import {Outlet} from "react-router-dom"
import Navbar from "../Components/Homepage/Navbar"
import Footer from "../Components/Homepage/Footer"

const FixedComponents = () => {
  return (
    <div>
        <Navbar/>
        <Outlet/>
    </div>
  )
}

export default FixedComponents