import React from 'react'
import arrow_icon from "../../assets/breadcrum_arrow.png"

const Breadcrums = (props) => {
  const { product } = props
  return (
    <div
      className="
        flex flex-wrap items-center gap-2 sm:gap-3
        text-[#5e5e5e] text-[12px] sm:text-[14px] md:text-[16px] font-medium
        mx-4 sm:mx-10 md:mx-[100px] lg:mx-[170px] my-6 sm:my-8 md:my-[60px]
        capitalize
      "
    >
      HOME 
      <img src={arrow_icon} alt="" className="w-3 sm:w-4 md:w-5" /> 
      SHOP 
      <img src={arrow_icon} alt="" className="w-3 sm:w-4 md:w-5" /> 
      {product.category} 
      <img src={arrow_icon} alt="" className="w-3 sm:w-4 md:w-5" /> 
      {product.name}
    </div>
  )
}

export default Breadcrums
