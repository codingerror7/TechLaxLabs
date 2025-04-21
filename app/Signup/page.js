import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <>
    <div className='bg-[#0B0C10] h-[100vh] w-[100vw]'>
    <div id='mainNav' className='w-[100%] h-[110px] flex items-center justify-between p-[35px]'>
        <div>
            <img className='h-[75px] w-[80px] rounded-[50%]' src='/logo.png'/>
        </div>
        <div className='flex items-center justify-between p-[10px] gap-10 text-xl font-[gilroy] text-white hover:cursor-pointer'>
            <h1 className='hover:cursor-pointer hover:underline'>EXPLORE!</h1>
            <h1 className='hover:cursor-pointer hover:underline'>COURSES</h1>
            <h1 className='hover:cursor-pointer hover:underline'>EXPERIENCE</h1>
            <h1 className='hover:cursor-pointer hover:underline'>REQUEST-DEMO</h1>
            <h1 className='hover:cursor-pointer hover:underline'>CALL-US</h1>
        </div>
    </div>
    <div className='flex h-[65%] w-[65%] mx-[17.5%] my-[2.5%] outline-white font-[gilroy] rounded-[40px]'>
        <div id='signUpdiv' className='h-[100%] w-[50%] text-white font-[gilroy] p-[10px] bg-black'>
            <h1 className='signuph1'>REGISTER AS COUNCELLOR/THERAPIST</h1>
            <form className='form'>
               Name:   <input type='text' className='input' placeholder='ENTER YOUR NAME:'></input><br></br>
               Age: <input type='number' className='input' placeholder='ENTER YOUR AGE:'></input><br></br>
               E-mail: <input type='email' className='input' placeholder='ENTER YOUR EMAIL:'></input><br></br>
               EXPERIENCE: <select className='input'>
                <option className='text-black font-mono text-[15px]'>0 Years</option>
                <option className='text-black font-mono text-[15px]'>0-3 Years</option>
                <option className='text-black font-mono text-[15px]'>3-5 Years</option>
                <option className='text-black font-mono text-[15px]'>5-10 Years</option>
                <option className='text-black font-mono text-[15px]'>10+ Years</option>
               </select><br></br>
               <button className='supbtn'>SIGN-UP</button>
            </form>
        </div>
        <div id='signupdiv2' className='h-[100%] w-[50%] text-white font-[gilroy] p-[10px]'>
            <h1 className='signuph1'>REGISTER FOR TREATMENT/COURSES</h1>
            <form className='form'>
            Name: <input type='text' className='input' placeholder='ENTER YOUR NAME:'></input><br></br>
               Age: <input type='number' className='input' placeholder='ENTER YOUR AGE:'></input><br></br>
               E-mail: <input type='email' className='input' placeholder='ENTER YOUR EMAIL:'></input><br></br>
               Gender: <select className='input'>
               <option className='text-black font-mono text-[15px]'>Male</option>
                <option className='text-black font-mono text-[15px]'>Female</option>
                <option className='text-black font-mono text-[15px]'>Others</option>
               </select><br></br>
               <button className='supbtn'>SIGN-UP</button>
               </form>
        </div>
    </div>
    </div>
    </>
  )
}

export default Navbar