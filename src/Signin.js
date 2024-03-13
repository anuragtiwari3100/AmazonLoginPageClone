import React from 'react'
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import logo from './logo.png';
import { Link } from 'react-router-dom';
import Registration from './Registration';

import { Switch } from '@mui/material';
const Signin = () => {
  return (
<div className="w-full">
    <div className="w-full bg-gray-50 pd-10">
        <form className='w-[350px] mx-auto  flex flex-col items-center'>
            <img src={logo} alt="logo" className="w-32" /> 
            <div className='w-full display-flex border border-zinc-200 p-6'>
            <h2 className='font-titleFont text-3xl font-medium mb-4'>Sign Up</h2>
             
              <div className='flex flex-col gap-3'>
              <div className='flex flex-col gap-3'>
  <div className='flex flex-col gap-2'>
    <p className='text-sm font-medium'>Email or Mobile Phone No</p>
    <input className="w-full py-1 border border-gray-300 px-2 text-base rounded-sm outline-none focus:ring-2 focus:ring-[#e77600] focus:border-transparent duration-100" type="email" style={{ fontFamily: 'Arial, sans-serif' }} />
  </div>
</div>


<div className='flex flex-col gap-3'>
  <div className='flex flex-col gap-2'>
    <p className='text-sm font-medium'>Password</p>
    <input className="w-full py-1 border border-gray-300 px-2 text-base rounded-sm outline-none focus:ring-2 focus:ring-[#e77600] focus:border-transparent duration-100" type="password" style={{ fontFamily: 'Arial, sans-serif' }} />
  </div>
</div>
<button onClick={(e)=>e.preventDefault()} className="w-full
 py-1.5 text-sm font-normal rounded-sm bg-gradient-to-t from-[#f7dfa5] 
 to-[#fec14b] hover:bg-gradient-to-b border border-zinc-400 active:border
 -yellow-800 active:shadow-amazonInput">
  Continue
</button>
            
              </div>
              <p className='text-xs text-black leading-4 mt-4 '>Continuing You Agrre to Amazon's {""}<span className='text-blue-600'>Condition Of Use {""}</span>and {""}<span  className='text-blue-600'>Privacy Notice</span></p>
             <p className='text-xs text-gray-600mt-4 cursor-pointer group'> 
              <ArrowRightIcon/>
              <span className='text-blue-600 group-hover:text-orange-700 group-hover:underline-offset-1'>Need Help?</span>
             </p>
            
              </div> 
              <p className='w-full text-xs text-gray-600 mt-4 flex items-center '>
                <span className='w-1/3 h-[1px] bg-zinc-400 inline-flex'></span>
                <span className='w-1/3 text-center'>New To Amazon?</span>
                <span className='w-1/3 h-[1px] bg-zinc-400 inline-flex'></span>
              </p>
  

<Link className='w-full'  to="/registration" >
<button  className="w-full py-1 st-4 text-sn font-normal rounded-sa
bg-gradient-to-t from-slate-200 to-slate-100 haver:bg-gradient-to-b border
border-zinc-400 active:border-yellow-800 active:shadow-amazonInput mt-3">
Create your Amazon account

</button>
</Link>

        </form>
    </div>


    < div className='w-full bg-gradient-to-t from-white via-white to-zinc-200 flex
     flex-col gap-4 justify-center items-center mt-5 py-10'>
    <div className='flex items-center gap-6 '>
  <p className='text-xs text-blue-600 hover:text-orange-600 hover:underline underline-offset-1 cursor-pointer  duration-100'>
    Condition of use
  </p>

  <p className='text-xs text-blue-600 hover:text-orange-600 hover:underline underline-offset-1 cursor-pointer  duration-100'>
    Privacy Notice 
  </p>

  <p className='text-xs text-blue-600 hover:text-orange-600 hover:underline underline-offset-1 cursor-pointer  duration-100'>
    Help
  </p>
    </div>
    <p className='text-xs text-gray-600'>© 1996-2024, Amazon.com, Inc. or its affiliates</p>
</div>


</div>


  )
}

export default Signin
