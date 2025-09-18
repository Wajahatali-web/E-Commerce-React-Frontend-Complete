import React from 'react'
import exclusive_image from '../../assets/exclusive_image.png'

const Offers = () => {
  return (
    <div className='offers w-[75%] min-h-[65vh] flex mx-auto px-[140px] mb-[150px] bg-[linear-gradient(180deg,#fde1ff_0%,#e1ffea22_66%)]'>
        <div className="offers-left flex-1 flex flex-col justify-center">
            <h1 className='text-[#171717] text-[80px] font-semibold'>Exclusive</h1>
            <h1 className='text-[#171717] text-[80px] font-semibold'>OFFERS FOR YOU</h1>
            <p className='text-[#171717] text-[22px] font-semibold'>ONLY ON BEST SELLER PRODUCTS</p>
            <button className='w-[282px] h-[70px] rounded-[35px] border-none bg-[#ff4141] text-white text-[22px] font-medium mt-[30px] cursor-pointer'>Check Now</button>
        </div>
        <div className="offers-right flex-1 flex justify-center items-center pt-[50px]">
            <img src={exclusive_image} alt="Exclusive Offers" />
        </div>
    </div>
  )
}

export default Offers
