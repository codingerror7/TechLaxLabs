import React from 'react'

const Footer = () => {
  return (
   <>
   <div id='footer' className='w-[100%] h-[12vh]  flex items-center justify-between text-white p-[40px]'>
    <div className='flex items-center justify-between gap-5'>
        <img className='w-[50px] h-[50px] rounded bg-center rounded-[50%]' src='logo.png'></img>
        <h3 className=' font-[gilroy] text-[18px] extrabold'>©️ 2025 TechLax Labs Inc.</h3>
    </div>
    <div className='font-[gilroy] flex items-center justify-around gap-7 text-[15px]'>
        <h1 className='hover:cursor-pointer hover:underline'>Terms</h1>
        <h1 className='hover:cursor-pointer hover:underline'>Privacy</h1>
        <h1 className='hover:cursor-pointer hover:underline'>Security</h1>
        <h1 className='hover:cursor-pointer hover:underline'>Status</h1>
        <h1 className='hover:cursor-pointer hover:underline'>Contact</h1>
        <h1 className='hover:cursor-pointer hover:underline'>Manage Cookies</h1>
    </div>
   </div>
   </>
  )
}

export default Footer