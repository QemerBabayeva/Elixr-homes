import React, {useState} from 'react'
import Navbar from "../Components/Homepage/Navbar"
import SectionOne from "../Components/Homepage/SectionOne"
import SectionTwo from "../Components/Homepage/SectionTwo"
import SectionTree from "../Components/Homepage/SectionTree"
import Footer from "../Components/Homepage/Footer"; 
import { useSearchParams } from 'react-router-dom'



const HomePage = () => {

  const [buttonshow,setButtonshow]=useState(false)
  window.onscroll=()=>{
    if(window.pageYOffset>500){
      setButtonshow(true)
    }else{
      setButtonshow(false)
    }
  }


  return (
    <div>
        <SectionOne/>
        <SectionTwo/>
        <SectionTree/>
        <Footer/>

        <button onClick={()=>window.scrollTo(0,0)} className={`${buttonshow?"block" : "hidden"}  h-[8vh] w-[7vw] fixed right-[10vh] bottom-[10vh] bg-orange-500`}>Up</button>

    </div>
  )
}

export default HomePage