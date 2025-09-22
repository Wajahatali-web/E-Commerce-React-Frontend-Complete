import React from 'react'
import footer_logo from '../../assets/logo_big.png'
import whatsapp_icon from '../../assets/whatsapp_icon.png'
import instagram_icon from '../../assets/instagram_icon.png'
import pintester_icon from '../../assets/pintester_icon.png'

const Footer = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-8 sm:gap-10 px-4 sm:px-6 md:px-10">
      
      {/* Logo + Name */}
      <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-5">
        <img src={footer_logo} alt="Shopora Logo" className="w-16 sm:w-20 md:w-24" />
        <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#383838]">SHOPORA</p>
      </div>

      {/* Navigation Links */}
      <ul className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 md:gap-12 text-[#252525] text-base sm:text-lg md:text-xl">
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>

      {/* Social Icons */}
      <div className="flex gap-4 sm:gap-6">
        <div className="p-2 sm:p-3 bg-[#fbfbfb] border border-[#ebebeb] rounded-lg">
          <img src={whatsapp_icon} alt="WhatsApp" className="w-5 sm:w-6" />
        </div>
        <div className="p-2 sm:p-3 bg-[#fbfbfb] border border-[#ebebeb] rounded-lg">
          <img src={instagram_icon} alt="Instagram" className="w-5 sm:w-6" />
        </div>
        <div className="p-2 sm:p-3 bg-[#fbfbfb] border border-[#ebebeb] rounded-lg">
          <img src={pintester_icon} alt="Pinterest" className="w-5 sm:w-6" />
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col items-center gap-4 w-full mb-6 text-[#1a1a1a] text-sm sm:text-base md:text-lg">
        <hr className="w-[80%] border-none rounded-[10px] h-[2px] bg-[#c7c7c7]" />
        <p className="text-center">Copyright © 2023 SHOPORA. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer
