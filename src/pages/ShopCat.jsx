import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import dropdown_icon from "../assets/dropdown_icon.png"
import Item from "../components/Item/Item";

const ShopCat = (props) => {
  const { all_products } = useContext(ShopContext)

  return (
    <div className="shop-cat">
      {/* Banner */}
      <img 
        className="shop-cat-banner block mx-auto my-6 w-[90%] sm:w-[85%] md:w-[82%] rounded-lg" 
        src={props.banner} 
        alt="Shop Category Banner" 
      />

      {/* Index + Sort */}
      <div className="shopcategory-indexSort flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-0 px-4 sm:px-8 md:px-[170px]">
        <p className="text-sm sm:text-base md:text-lg text-[#333]">
          <span className="font-semibold">Showing 1-12</span> Out of 36 Products
        </p>
        <div className="shopcategory-sort flex items-center gap-2 px-4 py-2 rounded-full border border-[#888] text-sm sm:text-base cursor-pointer">
          Sort by
          <img src={dropdown_icon} alt="Sort" className="w-4 h-4" />
        </div>
      </div>

      {/* Products Grid */}
      <div className="
        shopcategory-products 
        grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 
        gap-4 sm:gap-6 md:gap-8
        max-w-6xl mx-auto mt-10 px-4 sm:px-6 md:px-8 place-items-center
      ">
        {all_products.map((item, i) => {
          if (props.category === item.category) {
            return (
              <Item 
                key={i} 
                id={item.id} 
                name={item.name} 
                image={item.image} 
                new_price={item.new_price} 
                old_price={item.old_price} 
              />
            )
          }
          return null;
        })}
      </div>

      {/* Load More Button */}
      <div className="shopcategory-loadmore flex justify-center items-center mx-auto my-12 sm:my-20 md:my-[150px] 
        w-[180px] sm:w-[200px] md:w-[233px] 
        h-[55px] sm:h-[60px] md:h-[69px] 
        rounded-full bg-[#ededed] 
        text-[#787878] text-base sm:text-lg md:text-xl font-medium cursor-pointer
      ">
        Explore More
      </div>
    </div>
  )
}

export default ShopCat
