import React from 'react'

const Pagefour = () => {
  return (
    <>
    <h1 className='text-white text-[50px] font-extrabold text-[gilroy] antialias mx-[3%] underline'>WHAT WE DO TO CURE YOU?</h1>
    <div className='servicesCont'>
        <h1 className='services'> Mindfulness & Wellness Practices</h1>
        <h1 className='services'>MEDITATION & YOGA</h1>
        <h1 className='services'>1:1 COUNSELLINGS</h1>
        <h1 className='services'>NATURAL THERAPY SESSIONS</h1>
        <h1 className='services'>Social & Offline Activities</h1>
        <h1 id='bottomh1' className='services'>DIGITAL DETOX & BRAIN REWIRING</h1>
    </div>
    <video className='w-[90vw] h-[90vh]  object-cover mx-[5vw] my-[3%] z-10' src='/mainvid.mp4' autoPlay loop muted></video>
    <h3 id='pfHead' className='uppercase text-[gilroy] text-white text-[70px] mx-[3%] my-[7%] w-[45%]'>Reconnect with Life, Not Just Wi-Fi.</h3>
    <button className='outline-solid outline-white bg-transparent text-[20px] text-white text-center w-[15vw] font-mono mx-[3.2%] my-[-5%] absolute rounded-[10px] hover:cursor-pointer hover:bg-white hover:text-black'>BOOK A SESSION</button>
    </>
  )
}

export default Pagefour