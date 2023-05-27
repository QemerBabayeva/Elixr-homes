import React, { useRef, useState } from "react";
import {AiOutlineArrowRight} from "react-icons/ai"
import {AiOutlineArrowLeft} from "react-icons/ai"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./swiper.css";
import {Navigation} from "swiper";





const SectionOne = () => {
  const[myswiper,setMyswiper]=useState(null)



  const Data =[{
    id:1 ,
    title: "LUXURY VILLA IN BALI, INDONESIA",
    price: "$4.280.000",
    image: "https://images.pexels.com/photos/13620067/pexels-photo-13620067.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id:2 ,
    title: "LUXURY VILLA IN BALI, INDONESIA",
    price: "$4.280.000",
    image: "https://images.pexels.com/photos/8082328/pexels-photo-8082328.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id:3 ,
    title: "LUXURY VILLA IN BALI, INDONESIA",
    price: "$4.280.000",
    image: "https://images.pexels.com/photos/5997992/pexels-photo-5997992.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id:4 ,
    title: "LUXURY VILLA IN BALI, INDONESIA",
    price: "$4.280.000",
    image: "https://images.pexels.com/photos/7031407/pexels-photo-7031407.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
]


  return (
    <Swiper
       
        navigation={true}
        modules={[ Navigation]}
        className="mySwiper"
        onInit={(e)=> setMyswiper(e)}
      >

        {Data.map(item=>(
           <SwiperSlide key={item.id}>

          
 
 
         <div style={{backgroundImage: `url(${item.image})`}} className={`flex flex-col items-start justify-center gap-3 h-[100vh] w-full px-12  bg-cover)]`}>
        <h4 className='text-white text-4xl'>{item.title}</h4>
        <p className='text-white text-2xl'>{item.price}</p>
        <button className=' flex justify-center items-center gap-1 hover:bg-orange-500 px-5 py-1.5 border-solid bg-black text-white'>View Home <AiOutlineArrowRight/></button>
        </div>
 
         </SwiperSlide>

        ))}

        <div className="flex gap-3 absolute z-44 right-[10vh] bottom-[10vh] text-white text-3xl z-20 ">
           <button onClick={()=>myswiper.slidePrev()} className="  flex justify-center items-center h-[8vh] w-[8vh] border-white border-2 rounded-full hover:bg-orange-500 "><AiOutlineArrowLeft/></button>
           <button  onClick={()=>myswiper.slideNext()} className=" flex justify-center items-center h-[8vh] w-[8vh] border-white border-2 rounded-full hover:bg-orange-500 "><AiOutlineArrowRight/></button>
           </div>
        
       
       
      </Swiper>
    





    
  )
}

export default SectionOne