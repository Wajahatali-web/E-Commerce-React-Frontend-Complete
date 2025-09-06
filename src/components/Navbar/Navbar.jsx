import React, { useContext, useState } from 'react'
import logo from '../../assets/logo.png'
import "./Navbar.css"
import cart_icon from '../../assets/cart_icon.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../context/ShopContext'

const Navbar = () => {
    const [menu,setmenu] = useState('Shop')
    const {getTotalCartItem} = useContext(ShopContext)

  return (
    <div className='flex justify-around w-full z-50 bg-gradient-to-r from-matrix-black/95 via-matrix-darkBlack/95 to-matrix-black/95 backdrop-blur-xl border-b border-primary-500/20 h-20'>
      <div className='flex items-center gap-[10px]'>
        <img src={logo} alt="Logo" srcSet=''/>
        <p className='text-[#171717] text-[38px] font-semibold'>SHOPORA</p>
      </div>
      <ul className='nav-menu flex items-center gap-[50px] list-none text-[#626262] text-[20px] font-medium'>
        <li className='flex flex-col items-center justify-center gap-[3px] cursor-pointer' onClick={() => setmenu('Shop')}><Link style={{textDecoration:"none"}} to='/'> Shop</Link>{menu === 'Shop' ?<hr/> : <></>}</li>
        <li className='flex flex-col items-center justify-center gap-[3px] cursor-pointer' onClick={() => setmenu('Men')}><Link style={{textDecoration:"none"}} to='/men'> Men </Link>{menu === 'Men' ?<hr/> : <></>}</li>
        <li className='flex flex-col items-center justify-center gap-[3px] cursor-pointer' onClick={() => setmenu('Women')}><Link style={{textDecoration:"none"}} to='/women'> Women </Link>{menu === 'Women' ?<hr/> : <></>}</li>
        <li className='flex flex-col items-center justify-center gap-[3px] cursor-pointer' onClick={() => setmenu('Kids')}><Link style={{textDecoration:"none"}} to='/kids'> Kids </Link>{menu === 'Kids' ?<hr/> : <></>}</li>
      </ul>
      <div className='nav-login-cart flex items-center gap-[45px]'>
        <Link to='/login'><button className='w-[157px] h-[58px] border border-[#7a7a7a] rounded-[75px] text-[#515151] text-[20px] font-medium bg-white active:bg-[#f3f3f3]'>Login</button></Link>
        <Link to='/cart'><img src={cart_icon} alt="Cart" srcSet="" /></Link>
        <div className="nav-cart-count">{getTotalCartItem()}</div>
      </div> 
    </div>
  )
}

export default Navbar
