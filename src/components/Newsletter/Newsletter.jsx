import React from 'react'

const Newsletter = () => {
  return (
    <div className='newsletter w-[75%] min-h-[40vh] flex flex-col justify-center items-center mx-auto px-[140px] mb-[150px] bg-gradient-to-b from-[#fde1ff] to-[#e1ffea22] gap-[20px]'>
        <h1 className='text-[55px] font-semibold text-[#454545] mt-20'>Get Exclusive Offers on your Email</h1>
        <p className='text-[20px] text-[#454545]'>Subscribe to our newsletter and stay updated</p>
        <div className='flex justify-between items-center bg-white w-[730px] h-[70px] rounded-full border border-[#e3e3e3]'>
            <input className='w-[500px] ml-[30px] text-[16px] text-[#616161] border-none outline-none' type="email" placeholder='Enter your email' />
            <button className='w-[210px] h-[70px] bg-black text-white text-[16px] rounded-full cursor-pointer'>Subscribe</button>
        </div>
    </div>
  )
}

export default Newsletter
