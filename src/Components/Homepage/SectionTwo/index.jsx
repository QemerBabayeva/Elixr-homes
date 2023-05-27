import React from 'react'
import{ AiOutlineArrowRight }from 'react-icons/ai'

const SectionTwo = () => {
  return (
    <div className='flex h-[100vh] w-full justify-center items-center gap-12'>

      <div className='flex flex-col  justify-center  gap-5' >
        <h2 className='text-black font-bold text-2xl'>Explore our beautiful homes</h2>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br />
           Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, <br />
           when an unknown printer took a galley of type and scrambled it to make a type <br />
           specimen book. It has survived not only five centuries.</p>

           Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, <br />
           when an unknown printer took a galley of type and scrambled it to make a type <br />

           <button className='flex justify-center items-center gap-1 text-white hover:bg-orange-500 w-32 py-1.5 border-solid bg-black'>View Homes <AiOutlineArrowRight/></button>
      </div>



      <div className='h-[95vh] w-[70vh] bg-cover bg-[url("https://images.pexels.com/photos/5824896/pexels-photo-5824896.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")]'>
      
      </div>
      

    </div>
  )
}

export default SectionTwo