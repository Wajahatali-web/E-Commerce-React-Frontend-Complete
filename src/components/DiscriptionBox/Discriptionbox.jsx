import React from 'react'

const Discriptionbox = () => {
  return (
    <div className='discription-box mx-[170px] my-[120px]'>
      <div className="discription-box-navigator flex">
        <div className="flex items-center justify-center text-[16px] font-medium w-[170px] h-[70px] border border-[#d0d0d0]">Discription</div>
        <div className="flex items-center justify-center text-[16px] font-medium w-[170px] h-[70px] border border-[#d0d0d0] bg-[#FBFBFB] text-[#555]">Reviews (122)</div>
      </div>
      <div className="discription-box-description flex flex-col gap-[25px] border border-[#d0d0d0] p-[48px] pb-[70px]">
        <p>Discover a wide range of high-quality products at unbeatable prices. Whether you're looking for the latest fashion trends, cutting-edge electronics, home essentials, or unique gifts, we've got something for everyone.</p>
        <p>Whether you're a customer looking for quality products or a seller wanting to grow your online business, our platform offers everything you need</p>
      </div>
    </div>
  )
}

export default Discriptionbox
