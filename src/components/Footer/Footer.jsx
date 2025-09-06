import React from 'react'
import footer_logo from '../../assets/logo_big.png'
import whatsapp_icon from '../../assets/whatsapp_icon.png'
import instagram_icon from '../../assets/instagram_icon.png'
import pintester_icon from '../../assets/pintester_icon.png'

const Footer = () => {
    return (
        <div className='flex flex-col justify-center items-center gap-[50px]'>
            <div className='flex items-center gap-[20px]'>
                <img src={footer_logo} alt="" />
                <p className='text-[46px] font-bold text-[#383838]'>SHOPORA</p>
            </div>
            <ul className='flex list-none gap-[50px] text-[#252525] text-[20px]'>
                <li>Company</li>
                <li>Products</li>
                <li>Offices</li>
                <li>About</li>
                <li>Contact</li>

            </ul>
            <div className='flex gap-[20px]'>
                <div className="p-[10px] pb-[6px] bg-[#fbfbfb] border border-[#ebebeb]">
                   <img src={whatsapp_icon} alt="" />
                </div>
                <div className="p-[10px] pb-[6px] bg-[#fbfbfb] border border-[#ebebeb]">
                   <img src={instagram_icon} alt="" />
                </div>
                <div className="p-[10px] pb-[6px] bg-[#fbfbfb] border border-[#ebebeb]">
                   <img src={pintester_icon} alt="" />
                </div>
            </div>
            <div className="flex flex-col items-center gap-[30px] w-full mb-[30px] text-[#1a1a1a] text-[20px]">
                <hr className='w-[80%] border-none rounded-[10px] h-[3px] bg-[#c7c7c7]'/>
                <p>Copyright © 2023 SHOPORA. All rights reserved.</p>
            </div>
        </div>
    )
}

export default Footer
