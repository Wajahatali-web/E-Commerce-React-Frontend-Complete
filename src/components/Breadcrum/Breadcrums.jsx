import React from 'react'
import arrow_icon from "../../assets/breadcrum_arrow.png"

const Breadcrums = (props) => {
    const {product} = props
  return (
    <div className='flex align-items-center gap-[8px] text-[#5e5e5e] text-[16px] font-medium mx-[170px] my-[60px] capitalize'>
      HOME <img src={arrow_icon} alt="" /> SHOP <img src={arrow_icon} alt="" /> {product.category} <img src={arrow_icon} alt="" /> {product.name}
    </div>
  )
}

export default Breadcrums
