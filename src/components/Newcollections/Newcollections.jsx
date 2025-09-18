import React from 'react'
import New_collections from '../../assets/new_collections'
import Item from '../Item/Item'

const Newcollections = () => {
    return (
        <div className='new-collections flex flex-col items-center gap-[10px] mb-[100px]'>
            <h1 className='text-[#171717] text-[40px] font-semibold'>NEW COLLECTIONS</h1>
            <hr className='w-[200px] h-[6px] rounded-[10px] bg-[#252525]' />
            <div className="collections grid grid-cols-4 gap-[30px] mt-[50px]">
                {New_collections.map((item, i) => {
                    return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
                })}
            </div>
        </div>
    )
}

export default Newcollections
