import React from 'react'
import exclusive_image from '../../assets/exclusive_image.png'

const Offers = () => {
  return (
    <div className="offers w-[90%] sm:w-[85%] lg:w-[75%] min-h-[60vh] 
      flex flex-col lg:flex-row mx-auto px-4 sm:px-8 lg:px-[100px] xl:px-[140px] 
      mb-[80px] sm:mb-[100px] lg:mb-[150px] 
      bg-[linear-gradient(180deg,#fde1ff_0%,#e1ffea22_66%)] rounded-2xl">

      {/* Left Section */}
      <div className="offers-left flex-1 flex flex-col justify-center text-center lg:text-left py-8 lg:py-0">
        <h1 className="text-[#171717] text-[32px] sm:text-[48px] lg:text-[60px] xl:text-[80px] font-semibold leading-tight">
          Exclusive
        </h1>
        <h1 className="text-[#171717] text-[32px] sm:text-[48px] lg:text-[60px] xl:text-[80px] font-semibold leading-tight">
          OFFERS FOR YOU
        </h1>
        <p className="text-[#171717] text-[16px] sm:text-[18px] lg:text-[20px] xl:text-[22px] font-medium mt-3">
          ONLY ON BEST SELLER PRODUCTS
        </p>
        <button className="w-[180px] sm:w-[220px] lg:w-[250px] xl:w-[282px] 
          h-[55px] sm:h-[60px] lg:h-[65px] xl:h-[70px] 
          rounded-full bg-[#ff4141] text-white 
          text-[16px] sm:text-[18px] lg:text-[20px] xl:text-[22px] 
          font-medium mt-6 sm:mt-8 lg:mt-10 mx-auto lg:mx-0">
          Check Now
        </button>
      </div>

      {/* Right Section */}
      <div className="offers-right flex-1 flex justify-center items-center mt-6 lg:mt-0">
        <img 
          src={exclusive_image} 
          alt="Exclusive Offers" 
          className="w-[80%] sm:w-[70%] lg:w-[90%] max-w-[500px]" 
        />
      </div>
    </div>
  )
}

export default Offers
