import React from 'react'

const Loginsignup = () => {
  return (
    <div className="w-full min-h-screen bg-[#fce3fe] flex items-center justify-center px-4 sm:px-6 lg:px-0">
      <div className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl bg-white rounded-lg shadow-md px-6 sm:px-10 py-8 sm:py-10">
        <h1 className="text-2xl sm:text-3xl font-semibold text-center">Sign Up</h1>

        {/* Inputs */}
        <div className="flex flex-col gap-5 mt-6">
          <input
            className="h-12 sm:h-14 w-full pl-4 border border-[#c9c9c9] outline-none text-[#5c5c5c] text-base sm:text-lg rounded"
            type="text"
            placeholder="Enter Name"
          />
          <input
            className="h-12 sm:h-14 w-full pl-4 border border-[#c9c9c9] outline-none text-[#5c5c5c] text-base sm:text-lg rounded"
            type="email"
            placeholder="Enter Your Email"
          />
          <input
            className="h-12 sm:h-14 w-full pl-4 border border-[#c9c9c9] outline-none text-[#5c5c5c] text-base sm:text-lg rounded"
            type="password"
            placeholder="Enter Your Password"
          />
        </div>

        {/* Button */}
        <button className="w-full h-12 sm:h-14 text-white bg-[#ff4141] mt-6 rounded text-lg sm:text-xl font-medium cursor-pointer">
          Continue
        </button>

        {/* Already account */}
        <p className="mt-4 text-[#5c5c5c] text-sm sm:text-base font-medium text-center">
          Already have an account?{" "}
          <span className="text-[#ff4141] font-medium cursor-pointer">Login</span>
        </p>

        {/* Checkbox */}
        <div className="flex items-center mt-5 gap-3 text-[#5c5c5c] text-sm sm:text-base font-medium">
          <input type="checkbox" />
          <p>By continuing, I agree to the terms of privacy and policy</p>
        </div>
      </div>
    </div>
  )
}

export default Loginsignup
