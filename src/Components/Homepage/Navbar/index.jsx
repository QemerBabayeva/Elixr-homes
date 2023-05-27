import React, { useState } from 'react'
import {Link } from "react-router-dom"


const Navbar = () => {

  const [ show , setShow]= useState(false)
  window.onscroll=()=>{
    if(window.pageYOffset >50 ){
      setShow(true)
    }else{
      setShow(false)
    }
  }

  return (
    <div className={`${show ? "bg-orange-500" : "bg-transparent"} fixed z-50 w-full flex justify-between px-12 py-3 font-bold text-lg text-white`}>
        <Link to="/">ELIXR</Link>

        <div className='flex gap-5 '>
        <Link to="/about">About</Link>
        <Link to="/Homes">Homes</Link>
        <Link to="/Test">Test</Link>
        <span>Rentals</span>
        <button className=' text-white px-3 py-1 border-solid bg-black hover:bg-orange-500 '>Contact Us</button>
        </div>

      
    </div>
  )
}

export default Navbar