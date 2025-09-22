import React from 'react'
import data_product from '../../assets/data'
import Item from '../Item/Item'

const Relatedproduct = () => {
  return (
    <div className='relatedproducts flex flex-col items-center gap-3 my-16 px-4 sm:px-6 md:px-8'>
      {/* Heading */}
      <h1 className='text-[#171717] text-2xl sm:text-3xl md:text-[50px] font-medium text-center'>
        Related Products
      </h1>
      <hr className='w-24 sm:w-40 h-1 sm:h-[6px] rounded bg-[#252525]' />

      {/* Products */}
      <div className="relatedproducts-item grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10 w-full max-w-6xl place-items-center">
        {data_product.map((item, i) => (
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

export default Relatedproduct
