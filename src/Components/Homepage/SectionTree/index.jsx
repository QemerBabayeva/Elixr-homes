import React from 'react'
import {AiOutlineArrowRight} from "react-icons/ai"

const SectionTree
 = () => {
  return (
    <div className='h-[100vh] w-full flex flex-col justify-center items-center gap-12'>
      <div>
        <h3 className='text-4xl font-bold '>View our newest homes</h3>
      </div>

      <div className='flex gap-7'>
        <div className='flex flex-col gap-2 items-start'>
          <div className='h-[52vh] w-[82vh] bg-cover bg-[url("https://images.pexels.com/photos/1438834/pexels-photo-1438834.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")] '></div>
          <p className='text-xl '>8 Bed, 15 Bath House in Venice, California</p>
          <button className='flex justify-center text-black  py-1.5 px-1 hover:bg-orange-500 items-center gap-1'>View Details <AiOutlineArrowRight/></button>
        </div>



        <div className='flex flex-col gap-2 items-start mt-[13vh]'>
        <div className='h-[52vh] w-[82vh] bg-cover bg-[url("https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")] '></div>
          <p className='text-xl' >4 Bed, 10 Bath House in Miami, Florida</p>
          <button className='flex justify-center items-center text-black gap-1 py-1.5 px-1 hover:bg-orange-500'>View Details <AiOutlineArrowRight/></button>
        </div>

      </div>

    </div>
  )
}

export default SectionTree
