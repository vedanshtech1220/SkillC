import React from 'react';
import { FaArrowUpLong } from "react-icons/fa6";
import { Link } from 'react-router-dom'; // 1. IMPORT THE LINK COMPONENT

function LandingPage() {
  return (
    <div className="w-full h-screen bg-zinc-900 pt-25">
      {/* Text Section */}
      <div className="textStructure mt-5 px-20">
        {["We Deliver", "strategic", "Insights"].map((item, index) => (
          <div key={index} className="masker flex items-center gap-3">
            {index === 1 && <div className="w-[9vw] rounded-md h-[5vw] bg-red-800"></div>}
            <h1 className="uppercase leading-[6vw] tracking-tighter text-[7vw] font-['Founders_Grotesk'] font-medium">
              {item}
            </h1>
          </div>
        ))}
      </div>

      {/* Bottom Section */}
      <div className="border-t-[1px] border-zinc-800 mt-20 flex justify-between items-center py-5 px-20">
        {["for public and private companies", "From team formation to market success."].map((item, index) => (
          <p key={index} className="text-md font-light tracking-tight leading-none">
            {item}
          </p>
        ))}

        <div className="start flex items-center gap-5">
          {/* 2. REPLACE THE DIV WITH A LINK */}
          <Link to="/login" className="px-5 py-2 border-[1px] border-zinc-600 rounded-full font-light text-md uppercase">
            Get Started!!
          </Link>
          <div className="w-10 h-10 flex items-center justify-center border-[1px] border-zinc-600 rounded-full">
            <span className="rotate-[40deg]">
              <FaArrowUpLong />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;