import React, { useContext } from 'react'
import star_icon from "../../assets/star_icon.png"
import star_dull_icon from "../../assets/star_dull_icon.png"
import { ShopContext } from '../../context/ShopContext';


const ProductDisplay = (props) => {
    const {product} = props;
    const {addToCart} = useContext(ShopContext)
  return (
    <div className='flex ml-[170px] mr-[20px]'>
      <div className="left flex gap-[17px]">
        <div className="flex flex-col gap-[16px]">
            <img className='w-[232px]' src={product.image} alt="" />
            <img className='w-[232px]' src={product.image} alt="" />
            <img className='w-[232px]' src={product.image} alt="" />
            <img className='w-[232px]' src={product.image} alt="" />
        </div>
        <div className="productdisplay-img">
            <img src={product.image} alt="" className="w-[1000px] " />
        </div>
      </div>
      <div className="right mx-[70px] flex flex-col">
        <h1 className='text-[#3d3d3d] text-[40px] font-medium'>{product.name}</h1>
        <div className="flex align-items-center mt-[13px] gap-[5px] text-[#1c1c1c] text-[16px]">
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_dull_icon} alt="" />
            <p>(122)</p>
        </div>
        <div className='productdisplay-right-prices flex my-[40px] gap-[30px] text-[24px] font-medium'>
            <div className="right-priceold text-[#818181] line-through">${product.old_price}</div>
            <div className="right-pricenew text-[#ff4141]">${product.new_price}</div>
        </div>
        <div className="productdisplay-right-description">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam ea placeat totam aliquid incidunt repellendus? Necessitatibus repellendus ipsum ullam praesentium?
        </div>
        <div className="productdisplay-right-size">
            <h1 className='mt-[55px] text-[#656565] text-[20px] font-medium'>Select Size</h1>
            <div className="right-size flex my-[30px] gap-[20px]">
                <div className='px-[24px] py-[18px] bg-[#fbfbfb] border border-[#ebebeb] rounded cursor-pointer'>S</div>
                <div className='px-[24px] py-[18px] bg-[#fbfbfb] border border-[#ebebeb] rounded cursor-pointer'>M</div>
                <div className='px-[24px] py-[18px] bg-[#fbfbfb] border border-[#ebebeb] rounded cursor-pointer'>L</div>
                <div className='px-[24px] py-[18px] bg-[#fbfbfb] border border-[#ebebeb] rounded cursor-pointer'>XL</div>
                <div className='px-[24px] py-[18px] bg-[#fbfbfb] border border-[#ebebeb] rounded cursor-pointer'>XXL</div>
            </div>
            <button className='px-[40px] py-[20px] w-[200px] text-[16px] font-medium text-white bg-[#FF4141] mb-[40px] rounded border-none outline-none cursor-pointer' onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
            <p className='right-category mt-10px'><span className='font-medium'>Category : </span>Women ,T-Shirt, Crop Top</p>
            <p className='right-category'><span className='font-medium'>Tags : </span>Modern, Latest</p>
        </div>
      </div>
    </div>
  )
}

export default ProductDisplay
