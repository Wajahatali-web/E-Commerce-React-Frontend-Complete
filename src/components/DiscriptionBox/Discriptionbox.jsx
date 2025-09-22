import React from 'react'

const Discriptionbox = () => {
  return (
    <div className='discription-box max-w-6xl mx-auto my-12 sm:my-16 md:my-24 px-4 sm:px-6 md:px-8'>
      {/* Navigator */}
      <div className="discription-box-navigator flex flex-wrap">
        <div className="flex items-center justify-center text-sm sm:text-base md:text-lg font-medium w-1/2 sm:w-[170px] h-12 sm:h-[70px] border border-[#d0d0d0]">
          Description
        </div>
        <div className="flex items-center justify-center text-sm sm:text-base md:text-lg font-medium w-1/2 sm:w-[170px] h-12 sm:h-[70px] border border-[#d0d0d0] bg-[#FBFBFB] text-[#555]">
          Reviews (122)
        </div>
      </div>

      {/* Content */}
      <div className="discription-box-description flex flex-col gap-4 sm:gap-6 md:gap-[25px] border border-[#d0d0d0] p-4 sm:p-6 md:p-12 pb-8 sm:pb-12 md:pb-[70px] mt-4">
        <p className="text-sm sm:text-base md:text-lg leading-relaxed">
          Discover a wide range of high-quality products at unbeatable prices. Whether you're looking for the latest fashion trends, cutting-edge electronics, home essentials, or unique gifts, we've got something for everyone.
        </p>
        <p className="text-sm sm:text-base md:text-lg leading-relaxed">
          Whether you're a customer looking for quality products or a seller wanting to grow your online business, our platform offers everything you need.
        </p>
      </div>
    </div>
  )
}

export default Discriptionbox
