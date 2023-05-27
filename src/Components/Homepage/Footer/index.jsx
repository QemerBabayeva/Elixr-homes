import React from 'react'
import {BsYoutube} from "react-icons/bs"
import {BsInstagram} from "react-icons/bs"
import {BsFacebook} from "react-icons/bs"
import {BsLinkedin} from "react-icons/bs"
import {AiOutlineArrowRight} from "react-icons/ai"

const Footer = () => {
  return (
    <div className='h-[85vh] w-full bg-gray-900 flex flex-col gap-32 items-center justify-center'>

      <div className='flex gap-[30vh]'>
        <h1 className='text-7xl font-bold text-white '>Let's find <br />
            your Dream Home</h1>

        <div className='flex gap-16 text-base text-white'>
          <div>
            <ul className='flex flex-col gap-4'>
              <li className='font-bold'>Contact Us</li>
              <li>FAQ</li>
              <li>Support</li>
              <li>Questions</li>
            </ul>
          </div>

          <div>
            <ul className='flex flex-col gap-4'>
              <li className='font-bold'>Offices</li>
              <li>United States</li>
              <li>Europe</li>
              <li>Asia</li>
            </ul>
          </div>

        </div>
      </div>


      <div className='flex justify-center items-center gap-7'>
        <div className='text-3xl text-orange-500'> <BsYoutube/> </div>
        <div className='text-2xl text-orange-500'> <BsInstagram/></div>
        <div className='text-2xl text-orange-500'> <BsFacebook/></div>
        <div className='text-2xl text-orange-500'> <BsLinkedin/></div>
        <button className=' flex justify-center items-center gap-1 h-[5vh] w-[17vh] bg-orange-500 text-black ml-[110vh]'>Let's Chat <AiOutlineArrowRight/></button> 
      </div>
    </div>
  )
}

export default Footer