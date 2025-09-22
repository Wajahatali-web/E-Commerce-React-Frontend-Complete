import React from 'react'

const Newsletter = () => {
  return (
    <div className="newsletter w-[95%] sm:w-[85%] md:w-[75%] min-h-[40vh] flex flex-col justify-center items-center mx-auto px-4 sm:px-6 md:px-10 lg:px-[140px] mb-[60px] sm:mb-[100px] md:mb-[150px] bg-gradient-to-b from-[#fde1ff] to-[#e1ffea22] gap-4 sm:gap-6 md:gap-8 rounded-2xl">
      
      {/* Heading */}
      <h1 className="text-[20px] sm:text-[28px] md:text-[36px] lg:text-[48px] font-semibold text-[#454545] text-center leading-snug mt-6 sm:mt-10 md:mt-16">
        Get Exclusive Offers on your Email
      </h1>
      
      {/* Sub text */}
      <p className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] text-[#454545] text-center">
        Subscribe to our newsletter and stay updated
      </p>
      
      {/* Input + Button */}
      <div className="flex flex-col sm:flex-row justify-between items-center bg-white w-full sm:w-[450px] md:w-[600px] lg:w-[730px] rounded-full border border-[#e3e3e3] overflow-hidden">
        <input 
          className="w-full sm:flex-1 px-4 py-3 sm:py-0 text-[14px] sm:text-[15px] md:text-[16px] text-[#616161] border-none outline-none"
          type="email" 
          placeholder="Enter your email" 
        />
        <button className="w-full sm:w-[150px] md:w-[180px] lg:w-[210px] h-[45px] sm:h-[55px] md:h-[65px] bg-black text-white text-[14px] sm:text-[15px] md:text-[16px] font-medium rounded-full cursor-pointer">
          Subscribe
        </button>
      </div>
    </div>
  )
}

export default Newsletter
