import React from 'react'

const Loginsignup = () => {
  return (
   <div className="w-full min-h-screen bg-[#fce3fe] flex items-center justify-center my-auto mx-auto">
       <div className="w-[580px] h-[600px] bg-white mx-auto px-[60px] py-[40px]">
          <h1 className='text-[30px]'>Sign Up</h1>
          <div className="flex flex-col gap-[29px] mt-[30px]">
            <input className='h-[62px] w-full pl-[20px] border border-[#c9c9c9] outline-none text-[#5c5c5c] text-[18px]' type="text" placeholder='Enter Name'/>
            <input className='h-[62px] w-full pl-[20px] border border-[#c9c9c9] outline-none text-[#5c5c5c] text-[18px]' type="email" placeholder='Enter Your Email'/>
            <input className='h-[62px] w-full pl-[20px] border border-[#c9c9c9] outline-none text-[#5c5c5c] text-[18px]' type="password" placeholder='Enter Your Password'/>
          </div>
          <button className='w-full h-[62px] text-white bg-[#ff4141] mt-[30px] border-none rounded text-[24px] font-medium cursor-pointer'>Continue</button>
          <p className='loginsignup-login mt-[20px] text-[#5c5c5c] text-[18px] font-medium'>Already have an account. <span className='text-[#ff4141] font-medium'>Login</span></p>
          <div className="loginsignup-agree flex align-items-center mt-[25px] gap-[18px] text-[#5c5c5c] text-[17px] font-medium">
            <input type="checkbox" name='' id=''/>
            <p>By continuing,I agree to the term of privacy and policy</p>
          </div>
        </div>
    </div>
  )
}

export default Loginsignup
