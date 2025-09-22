import React from 'react'
import data_product from '../../assets/data'
import Item from '../Item/Item'

const Popular = () => {
  return (
    <div className="popular flex flex-col items-center mb-[80px] sm:mb-[120px] md:mb-[150px] px-4 sm:px-6 md:px-10">
      {/* Heading */}
      <h1 className="text-[#171717] text-[22px] sm:text-[28px] md:text-[32px] lg:text-[40px] font-semibold text-center">
        POPULAR IN WOMEN
      </h1>
      <hr className="w-[120px] sm:w-[150px] md:w-[200px] h-[4px] sm:h-[5px] md:h-[6px] rounded-[10px] bg-[#252525] mt-2 sm:mt-3" />

      {/* Items Grid */}
      <div className="popular-items mt-[30px] sm:mt-[40px] md:mt-[50px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10">
        {data_product.map((item, y) => (
          <Item
            key={y}
            id={item.id}
            name={item.name}
            image={item.image}
            new_price={item.new_price}
            old_price={item.old_price}
          />
        ))}
      </div>
    </div>
  )
}

export default Popular
