"use client";
import React, { useEffect, useRef } from 'react'
import Navbar from '@/Components/Navbar'
import Pagetwo from '@/Components/Pagetwo'
import Pagethree from '@/Components/Pagethree'
import Pagefour from '@/Components/Pagefour'
import Footer from '@/Components/Footer'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import ScrollTrigger from 'gsap/src/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
const page = () => {
    useGSAP(()=>{
    {/*  gsap.from("#ptHead",{
        y:120,
        duration : 2,
        opacity : 0,
        scrollTrigger : {
          trigger : "#ptHead",
          markers : true,
          start: "top 95%",
          end : "top 55%",
          scrub : 1,
        }
      })
      gsap.from("#ptPara",{
        y:100,
        duration : 2,
        opacity : 0,
        scrollTrigger : {
          trigger : "#ptPara",
          markers : true,
          start: "top 120%",
          end : "top 80%",
          scrub : 1,
        }
      })*/}
      gsap.from("#rev1",{
        y:100,
        duration : 2,
        opacity : 0,
        scrollTrigger : {
          trigger : "#rev1",
         /* markers : true,*/
          start: "top 80%",
          end : "top 55%",
          scrub : 2,
        }
      })
      gsap.from("#pfHead",{
        y:100,
        duration : 2,
        opacity : 0,
        scrollTrigger : {
          trigger : "#pfHead",
         /* markers : true,*/
          start: "top 80%",
          end : "top 60%",
          scrub : 2,
        }
      })
    })
  return (
    <>
    <div className='min-h-[100vh] w-[100vw]'>
    <Navbar/>
    <h1 id='mainHead' className='w-[50%] text-[80px] font-[gilroy] font-extrabold absolute uppercase text-white my-[170px] mx-[20px]'>"Log Out to Tune In – Live Beyond the Scroll."</h1>
    <div className='flex'>
    {/*video className='h-[100vh] w-[50%] bg-center object-cover' src='/video.mp4' autoPlay loop muted></video>*/}
    <video className='h-[100vh] w-[100vw] bg-center object-cover' src='/video2.mp4' autoPlay loop muted></video>
    <button className='bg-white text-xl text-black font-mono font-extrabold absolute my-[37%] mx-[1.2%] w-[170px] text-center hover:cursor-pointer'>BOOK DEMO</button>
    </div>
    </div>
    <div className='min-h-[145vh] w-[100vw] bg-[#0D0D0D]'> {/*RICH BLACK* OBSIDIAN*/}
     <Pagetwo/>
    </div>
    <div className='min-h-[115vh] w-[100vw] bg-[#0D0D0D]'>
      <Pagethree/>
    </div>
    <div className='min-h-[182vh] w-[100vw] bg-[#0D0D0D]'>
      <Pagefour/>
    </div>
    <div  className='min-h-[12vh] w-[100vw] bg-[#0D0D0D]'>
      <Footer/>
    </div>
    </>
  )
}

export default page