import React from 'react'
import hand_icon from '../../assets/hand_icon.png'
import arrow_icon from '../../assets/arrow.png'
import hero_image from '../../assets/hero_image.png'

const Hero = () => {
    return (
        <div className="h-full bg-[linear-gradient(180deg,_#fde1ff,_#e1ffea22_60%)] flex flex-col md:flex-row">
            {/* Left Side */}
            <div className="flex-1 flex flex-col justify-center gap-[20px] px-6 md:pl-[180px] leading-[1.1] text-center md:text-left">
                <h2 className="text-[22px] md:text-[26px] font-semibold text-[#090909]">
                    NEW ARRIVALS ONLY
                </h2>

                <div>
                    <div className="flex items-center justify-center md:justify-start gap-[20px]">
                        <p className="text-[50px] md:text-[90px] font-bold text-[#171717]">
                            new
                        </p>
                        <img
                            src={hand_icon}
                            alt="Hand Icon"
                            className="w-[60px] md:w-[105px]"
                        />
                    </div>
                    <p className="text-[50px] md:text-[90px] font-bold text-[#171717]">
                        Collections
                    </p>
                    <p className="text-[50px] md:text-[90px] font-bold text-[#171717]">
                        for everyone
                    </p>
                </div>

                {/* Button */}
                <div className="flex justify-center md:justify-center items-center gap-[15px] w-[250px] md:w-[310px] h-[60px] md:h-[70px] rounded-[75px] mt-[30px] bg-[#ff4141] text-white text-[18px] md:text-[22px] font-medium mx-auto md:mx-0">
                    <div>Latest Collection</div>
                    <img src={arrow_icon} alt="" />
                </div>
            </div>

            {/* Right Side (Image) */}
            <div className="flex-1 flex justify-center items-center mt-8 md:mt-0">
                <img src={hero_image} alt="" className="max-w-[90%] md:max-w-full" />
            </div>
        </div>

    )
}

export default Hero
