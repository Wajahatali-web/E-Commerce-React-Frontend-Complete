import React from 'react'
import data_product from '../../assets/data'
import Item from '../Item/Item'

const Popular = () => {
  return (
    <div className='popular flex flex-col items-center mb-[150px]'>
      <h1 className='text-[#171717] text-[40px] font-semibold'>POPULAR IN WOMEN</h1>
      <hr className='w-[200px] h-[6px] rounded-[10px] bg-[#252525]'/>
      <div className='popular-items mt-[50px] flex gap-[40px]'>
        {data_product.map((item,y) => {
          return <Item key={y} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
        })}
      </div>
    </div>
  )
}

export default Popular
