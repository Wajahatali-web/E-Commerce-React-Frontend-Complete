import React, { useContext, useState } from 'react'
import logo from '../../assets/logo.png'
import "./Navbar.css"
import cart_icon from '../../assets/cart_icon.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../context/ShopContext'
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [menu, setmenu] = useState('Shop')
  const { getTotalCartItem } = useContext(ShopContext)
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className='nav-menu flex justify-between items-center px-4 lg:px-12 w-full z-50 
      bg-gradient-to-r from-matrix-black/95 via-matrix-darkBlack/95 to-matrix-black/95 
      backdrop-blur-xl border-b border-primary-500/20 py-3 lg:py-5'>

      {/* Logo */}
      <Link to='/' onClick={() => setmenu('Shop')}><div className='flex items-center gap-2 lg:gap-3'>
        <img src={logo} alt="Logo" className="w-8 h-8 lg:w-10 lg:h-10" />
        <p className='text-[#171717] text-xl lg:text-[32px] font-semibold'>SHOPORA</p>
      </div></Link>

      {/* Desktop Menu (sirf lg aur upar) */}
      <ul className='hidden lg:flex items-center gap-10 list-none text-[#626262] text-[18px] lg:text-[20px] font-medium'>
        <li className='flex flex-col items-center gap-1 cursor-pointer' onClick={() => setmenu('Shop')}>
          <Link to='/'> Shop</Link>{menu === 'Shop' ? <hr /> : null}
        </li>
        <li className='flex flex-col items-center gap-1 cursor-pointer' onClick={() => setmenu('Men')}>
          <Link to='/men'> Men </Link>{menu === 'Men' ? <hr /> : null}
        </li>
        <li className='flex flex-col items-center gap-1 cursor-pointer' onClick={() => setmenu('Women')}>
          <Link to='/women'> Women </Link>{menu === 'Women' ? <hr /> : null}
        </li>
        <li className='flex flex-col items-center gap-1 cursor-pointer' onClick={() => setmenu('Kids')}>
          <Link to='/kids'> Kids </Link>{menu === 'Kids' ? <hr /> : null}
        </li>
      </ul>

      {/* Cart + Login */}
      <div className='flex items-center gap-4 lg:gap-8'>
        <Link to='/login'>
          <button className='hidden lg:block w-[120px] lg:w-[150px] h-[42px] lg:h-[54px] 
            border border-[#7a7a7a] rounded-full text-[#515151] text-sm lg:text-lg font-medium 
            bg-white active:bg-[#f3f3f3]'>
            Login
          </button>
        </Link>
        <div className="relative flex items-center">
          <Link to='/cart'>
            <img src={cart_icon} alt="Cart" className="w-6 lg:w-8" />
          </Link>
          <div className="absolute -top-2 -right-3 bg-red-500 text-white text-xs lg:text-sm rounded-full w-5 h-5 flex items-center justify-center">
            {getTotalCartItem()}
          </div>
        </div>

        {/* Mobile Menu Toggle (sm + md pe show hoga) */}
        <button className='lg:hidden' onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Dropdown (sm + md) */}
      {isOpen && (
        <div className='absolute top-[70px] left-0 w-full bg-white shadow-md 
          flex flex-col items-center py-4 gap-3 text-[#626262] font-medium lg:hidden'>
          <Link to='/' onClick={() => { setmenu('Shop'); setIsOpen(false); }}>Shop</Link>
          <Link to='/men' onClick={() => { setmenu('Men'); setIsOpen(false); }}>Men</Link>
          <Link to='/women' onClick={() => { setmenu('Women'); setIsOpen(false); }}>Women</Link>
          <Link to='/kids' onClick={() => { setmenu('Kids'); setIsOpen(false); }}>Kids</Link>
          <Link to='/login' onClick={() => setIsOpen(false)}>
            <button className='w-[110px] h-[42px] border border-[#7a7a7a] rounded-full 
              text-[#515151] text-sm font-medium bg-white active:bg-[#f3f3f3]'>
              Login
            </button>
          </Link>
        </div>
      )}
    </div>
  )
}

export default Navbar
