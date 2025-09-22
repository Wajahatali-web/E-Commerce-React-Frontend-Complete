import React from 'react'
import New_collections from '../../assets/new_collections'
import Item from '../Item/Item'

const Newcollections = () => {
  return (
    <div className="new-collections flex flex-col items-center mb-[80px] md:mb-[100px] px-4">
      
      {/* Heading */}
      <h1 className="text-[#171717] text-[24px] sm:text-[28px] md:text-[32px] lg:text-[40px] font-semibold text-center">
        NEW COLLECTIONS
      </h1>
      <hr className="w-[120px] sm:w-[150px] md:w-[200px] h-[4px] md:h-[5px] lg:h-[6px] rounded-[10px] bg-[#252525] mt-2" />
      
      {/* Items Grid */}
      <div className="collections mt-[30px] sm:mt-[40px] md:mt-[50px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10">
        {New_collections.map((item, i) => (
          <Item 
            key={i}
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

export default Newcollections

