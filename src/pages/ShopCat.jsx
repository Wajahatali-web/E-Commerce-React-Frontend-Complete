import React from 'react'
import { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import dropdown_icon from "../assets/dropdown_icon.png"
import Item from "../components/Item/Item";

const ShopCat = (props) => {
  const { all_products } = useContext(ShopContext)
  return (
    <div className="shop-cat">
      <img className='shop-cat-banner block mx-auto my-[30px] w-[82%]' src={props.banner} alt="" />
      <div className="shopcategory-indexSort flex justify-between items-center mx-[170px]">
        <p>
          <span className='font-semibold'>Showing 1-12</span>Out of 36 Products
        </p>
        <div className="shopcategory-sort flex items-center gap-2 px-[20px] py-[10px] rounded-full border border-[#888]">
          Sort by
          <img src={dropdown_icon} alt="" className="w-4 h-4" />
        </div>
      </div>
      <div className="shopcategory-products 
                grid grid-cols-4 gap-[30px] 
                max-w-6xl mx-auto mt-[50px]">
        {all_products.map((item, i) => {
          if (props.category === item.category) {
            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
          }
          else {
            return null;
          }
        })}
      </div>
      <div className="shopcategory-loadmore flex justify-center items-center mx-auto my-[150px] w-[233px] h-[69px] rounded-[75px] bg-[#ededed] text-[#787878] text-[20px] font-medium">
        Explore More
      </div>
    </div>
  )
}

export default ShopCat
