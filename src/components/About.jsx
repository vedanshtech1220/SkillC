import React, { useState } from 'react'

export default function About() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div className='w-full p-20 bg-[#212121] rounded-tl-3xl rounded-tr-3xl text-[#F5F5F5] flex flex-col items-center'>
      <h1 className="font-['Neue_Montreal'] text-[3vw] leading-[4.5vw] tracking-tight">
       Our platform translates employee performance into a dynamic skill map, empowering leaders to assemble high-impact teams, accelerate onboarding, and close critical skill gaps before they affect the bottom line.
      </h1>

      <div className="w-full flex gap-5 border-t-[2px] pt-10 mt-20 border-[#3e4428]">
        
        {/* Left side */}
        <div className="w-1/2">
          <h1 className="text-7xl">Our Approach</h1>
          <button className="flex gap-10 uppercase items-center px-10 py-6 mt-10 bg-zinc-900 rounded-full text-white">
            Read More
            <div className="w-2 h-3 bg-zinc-100 rounded-full"></div>
          </button>
        </div>

        {/* Right side image */}
        <div className="w-1/2 h-[70vh] bg-[#798d43] rounded-3xl  border-2 border-zinc-500 overflow-hidden relative">
          <img
            className={`w-full h-full object-cover rounded-3xl transition-transform duration-500 ${
              isHovered ? "scale-110" : "scale-100"
            }`}
            src="https://i.pinimg.com/736x/7c/54/c3/7c54c357901d4c5490a74f6f693abb52.jpg"
            alt=""
            onMouseOver={() => setIsHovered(true)}
            onMouseOut={() => setIsHovered(false)}
          />
          <div className="absolute inset-0 tracking-tight flex items-center mb-20  font-['Neue_Montreal'] justify-center">
            <h2 className="text-[4vw] font-semibold text-zinc-300 drop-shadow-lg   "> Saw A Dream!! <span className="text-[4vw] font-semibold text-zinc-500  "> <br /> Making It Real </span></h2>
          </div>
        </div>
      </div>
    </div>
  )
}
