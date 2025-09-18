import React, { useContext } from 'react'
import { ShopContext } from '../../context/ShopContext'
import remove_icon from '../../assets/cart_cross_icon.png'

const CartItems = () => {
    const {getTotalCartAmount, all_products, cartItems, RemoveFromCart } = useContext(ShopContext)
    return (
        <div className='cartItems mx-[170px] my-[100px]'>
            <div className="grid grid-cols-[0.5fr_2fr_1fr_1fr_1fr_1fr] items-center gap-[75px] py-5 text-[#454545] text-lg font-semibold">
                <p>Product</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr className='h-[3px] bg-[#e2e2e2] border' />

            {all_products.map((e) => {
                if (cartItems[e.id] > 0) {
                    return <div> <div className="text-[17px] font-medium grid grid-cols-[0.5fr_2fr_1fr_1fr_1fr_1fr] items-center gap-[75px] py-5 text-[#454545] text-lg">
                        <img src={e.image} alt="" className='Carticon-product-icon h-[62px]' />
                        <p>{e.name}</p>
                        <p>${e.new_price}</p>
                        <button className='w-[64px] h-[50px] border border-[#ebebeb] bg-[#fff]'>{cartItems[e.id]}</button>
                        <p>${e.new_price * cartItems[e.id]}</p>
                        <img src={remove_icon} className='w-[15px] mx-[40px] cursor-pointer' onClick={() => { RemoveFromCart(e.id) }} alt="" />
                    </div>
                        <hr className='h-[3px] bg-[#e2e2e2] border' />
                    </div>
                }
                return null;
            })}
            <div className='cartitems-down flex my-[100px]'>
                <div className="cartitems-total flex-1 flex flex-col mr-[200px] gap-[40px]">
                    <h1 className='text-[40px] font-medium'>Cart Totals</h1>
                    <div>
                        <div className="flex justify-between py-[15px]">
                            <p>Subtotal</p>
                            <p>${getTotalCartAmount()}</p>
                        </div>
                        <hr />
                        <div className="flex justify-between py-[15px]">
                            <p>Shipping Fee</p>
                            <p>Free</p>
                        </div>
                        <hr />
                        <div className="flex justify-between py-[15px] font-bold">
                            <h3>Total</h3>
                            <h3>${getTotalCartAmount()}</h3>
                        </div>
                    </div>
                    <button className='w-[262px] h-[58px] outline-none border-none bg-[#ff5a5a] text-white text-base font-semibold'>Proceed to Checkout</button>
                </div>
                <div className="cartitems-promocode flex-1 text-base font-medium">
                    <p className='text-[#555]'>If you have a promo code, enter it here</p>
                    <div className="cartitems-promobox w-[504px] mt-[15px] pl-[20px] h-[58px] bg-[#eaeaea] flex justify-between">
                        <input
                            type="text"
                            placeholder="Promo-Code"
                            className="flex-1 border-none outline-none bg-transparent text-base h-[50px] placeholder:text-gray-500"
                        />
                        <button className="w-[170px] h-[58px] text-[16px] bg-black text-white cursor-pointer">
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartItems
