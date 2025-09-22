import React from 'react'
import hand_icon from '../../assets/hand_icon.png'
import arrow_icon from '../../assets/arrow.png'
import hero_image from '../../assets/hero_image.png'

const Hero = () => {
    return (
        <div className="h-full bg-[linear-gradient(180deg,_#fde1ff,_#e1ffea22_60%)] flex flex-col lg:flex-row items-center justify-center overflow-hidden">
            {/* Left Side */}
            <div className="flex-1 flex flex-col justify-center gap-4 px-4 sm:px-8 md:pl-[100px] lg:pl-0 leading-[1.1] text-center lg:text-center mt-10 lg:mt-0">
                <h2 className="text-[18px] sm:text-[22px] md:text-[26px] lg:text-[22px] font-semibold text-[#090909]">
                    NEW ARRIVALS ONLY
                </h2>

                <div>
                    <div className="flex items-center justify-center gap-3 sm:gap-5">
                        <p className="text-[32px] sm:text-[50px] md:text-[70px] lg:text-[60px] font-bold text-[#171717]">
                            new
                        </p>
                        <img
                            src={hand_icon}
                            alt="Hand Icon"
                            className="w-[35px] sm:w-[60px] md:w-[80px] lg:w-[70px]"
                        />
                    </div>
                    <p className="text-[32px] sm:text-[50px] md:text-[70px] lg:text-[60px] font-bold text-[#171717]">
                        Collections
                    </p>
                    <p className="text-[32px] sm:text-[50px] md:text-[70px] lg:text-[60px] font-bold text-[#171717]">
                        for everyone
                    </p>
                </div>

                {/* Button */}
                <div className="flex justify-center items-center gap-3 sm:gap-4 w-[180px] sm:w-[220px] md:w-[260px] lg:w-[240px] h-[45px] sm:h-[55px] md:h-[65px] lg:h-[55px] rounded-[75px] mt-6 bg-[#ff4141] text-white text-[14px] sm:text-[18px] md:text-[20px] lg:text-[18px] font-medium mx-auto cursor-pointer active:scale-95 transition">
                    <div>Latest Collection</div>
                    <img src={arrow_icon} alt="Arrow" className="w-4 sm:w-5 md:w-6 lg:w-5" />
                </div>
            </div>

            {/* Right Side (Image) */}
            <div className="flex-1 flex justify-center items-center mt-8 lg:mt-0">
                <img
                    src={hero_image}
                    alt="Hero"
                    className="max-w-[85%] sm:max-w-[75%] md:max-w-[80%] lg:max-w-[70%] object-contain"
                />
            </div>
        </div>
    )
}

export default Hero
