import React from 'react'
import { Link } from 'react-router-dom'


const Item = (props) => {
  return (
    <div className='item w-[250px] hover:scale-105 transition duration-[600ms] '>
        <Link to={`/product/${props.id}`}><img onClick={window.scrollTo(0,0)} src={props.image} alt="" /></Link>
        <p className='my-[6px]'>{props.name}</p>
        <div className='item-prices flex gap-[20px]'>
            <div className="item-price-new text-[#374151] text-[18px] font-semibold">
                {props.new_price}
            </div>
            <div className="item-price-old text-[#8c8c8c] text-[18px] font-medium line-through">
                {props.old_price}
            </div>
        </div>

    </div>
  )
}

export default Item
