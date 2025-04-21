import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <>
    <div id='mainNav' className='w-[100%] h-[100px] bg-transparent flex items-center justify-between p-[22px] absolute '>
        <div>
            <img className='h-[75px] w-[80px] rounded-[50%]' src='/logo.png'/>
        </div>
        <div id='navList' className='flex items-center justify-between p-[10px] gap-10 text-xl font-[gilroy] text-white hover:cursor-pointer rounded-[10px]  mx-[26.9%] fixed z-60'>
            <h1 className='hover:cursor-pointer hover:underline'>EXPLORE!</h1>
            <h1 className='hover:cursor-pointer hover:underline'>COURSES</h1>
            <h1 className='hover:cursor-pointer hover:underline'>EXPERIENCE</h1>
            <h1 className='hover:cursor-pointer hover:underline'>REQUEST-DEMO</h1>
        </div>
        <div id='navList2' className='flex items-center justify-between p-[7px] gap-5 rounded-[10px]'>
            <Link href='./Signup' className='text-lg text-white font-mono hover:cursor-pointer hover:font-semibold z-20'>SIGN-UP!</Link>
            <button className='text-m text-white font-mono outline-solid outline-white rounded-[5px] p-[5px] hover:cursor-pointer z-20'>CALL-US</button>
        </div>
    </div>
    </>
  )
}

export default Navbar