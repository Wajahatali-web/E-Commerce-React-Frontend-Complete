import React, { useContext } from 'react'
import star_icon from "../../assets/star_icon.png"
import star_dull_icon from "../../assets/star_dull_icon.png"
import { ShopContext } from '../../context/ShopContext';

const ProductDisplay = (props) => {
  const { product } = props;
  const { addToCart } = useContext(ShopContext);

  return (
    <div className="flex flex-col lg:flex-row gap-8 px-4 sm:px-6 md:px-10 lg:ml-[170px] lg:mr-[20px]">
      
      {/* Left Section */}
      <div className="left flex flex-col md:flex-row gap-4">
        {/* Thumbnails */}
        <div className="flex md:flex-col gap-3 md:gap-4">
          <img className="w-[80px] sm:w-[100px] md:w-[120px] lg:w-[232px]" src={product.image} alt="" />
          <img className="w-[80px] sm:w-[100px] md:w-[120px] lg:w-[232px]" src={product.image} alt="" />
          <img className="w-[80px] sm:w-[100px] md:w-[120px] lg:w-[232px]" src={product.image} alt="" />
          <img className="w-[80px] sm:w-[100px] md:w-[120px] lg:w-[232px]" src={product.image} alt="" />
        </div>
        {/* Main Image */}
        <div className="productdisplay-img flex justify-center items-center">
          <img src={product.image} alt="" className="w-full max-w-[600px] lg:max-w-[1000px]" />
        </div>
      </div>

      {/* Right Section */}
      <div className="right flex flex-col mt-6 lg:mt-0 lg:mx-[70px]">
        {/* Product Title */}
        <h1 className="text-[#3d3d3d] text-[22px] sm:text-[28px] md:text-[32px] lg:text-[40px] font-medium">
          {product.name}
        </h1>

        {/* Rating */}
        <div className="flex items-center mt-3 gap-2 text-[#1c1c1c] text-[14px] sm:text-[16px]">
          <img src={star_icon} alt="" className="w-4 sm:w-5" />
          <img src={star_icon} alt="" className="w-4 sm:w-5" />
          <img src={star_icon} alt="" className="w-4 sm:w-5" />
          <img src={star_icon} alt="" className="w-4 sm:w-5" />
          <img src={star_dull_icon} alt="" className="w-4 sm:w-5" />
          <p>(122)</p>
        </div>

        {/* Prices */}
        <div className="flex my-6 sm:my-8 gap-4 sm:gap-6 text-[18px] sm:text-[20px] md:text-[24px] font-medium">
          <div className="text-[#818181] line-through">${product.old_price}</div>
          <div className="text-[#ff4141]">${product.new_price}</div>
        </div>

        {/* Description */}
        <div className="text-[#555] text-[14px] sm:text-[16px] leading-relaxed">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam ea placeat totam aliquid incidunt repellendus? Necessitatibus repellendus ipsum ullam praesentium?
        </div>

        {/* Sizes */}
        <div className="productdisplay-right-size mt-6">
          <h1 className="text-[#656565] text-[16px] sm:text-[18px] md:text-[20px] font-medium">Select Size</h1>
          <div className="flex flex-wrap my-4 gap-3 sm:gap-4">
            {["S", "M", "L", "XL", "XXL"].map((size) => (
              <div
                key={size}
                className="px-4 py-2 sm:px-6 sm:py-3 bg-[#fbfbfb] border border-[#ebebeb] rounded cursor-pointer text-sm sm:text-base"
              >
                {size}
              </div>
            ))}
          </div>
        </div>

        {/* Add to Cart */}
        <button
          className="px-6 py-3 w-[160px] sm:w-[200px] text-[14px] sm:text-[16px] font-medium text-white bg-[#FF4141] mb-6 rounded cursor-pointer"
          onClick={() => addToCart(product.id)}
        >
          ADD TO CART
        </button>

        {/* Category & Tags */}
        <p className="text-sm sm:text-base">
          <span className="font-medium">Category: </span>Women, T-Shirt, Crop Top
        </p>
        <p className="text-sm sm:text-base">
          <span className="font-medium">Tags: </span>Modern, Latest
        </p>
      </div>
    </div>
  );
};

export default ProductDisplay;
