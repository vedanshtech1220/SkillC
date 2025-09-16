import { motion } from "framer-motion";

function Marque() {
  return (
    // The background color has been updated here
    <div className="w-full py-10 rounded-tl-3xl rounded-tr-3xl bg-[#E5005F]">
      <div className="border-t-1 border-b-1 border-zinc-300 overflow-hidden whitespace-nowrap">
        <motion.div
          initial={{ x: 1 }}
          animate={{ x: "-400%" }} // move more distance
          transition={{
            ease: "linear",
            repeat: Infinity,
            repeatType: "loop",
            duration: 14, // shorter duration = faster
            repeatDelay: 0,
          }}
          className="flex "
        >
          <h1 className='animation:autoRun 0s linear infinite text-[20vw] leading-none font-["Founder_Grotesk_X-Condensed"] uppercase pt-10 pr-10 font-semibold'>
            we are SkillC 
          </h1>
          <h1 className='animation:autoRun 0s linear infinite text-[20vw] leading-none font-["Founder_Grotesk_X-Condensed"] uppercase pt-10 pr-10 font-semibold'>
            we are SkillC
          </h1>
          <h1 className='animation:autoRun 0s linear infinite text-[20vw] leading-none font-["Founder_Grotesk_X-Condensed"] uppercase pt-10 pr-10 font-semibold'>
            we are SkillC 
          </h1>
          <h1 className='animation:autoRun 0s linear infinite text-[20vw] leading-none font-["Founder_Grotesk_X-Condensed"] uppercase pt-10 pr-10 font-semibold'>
            we are SkillC 
          </h1>
          <h1 className='animation:autoRun 0s linear infinite text-[20vw] leading-none font-["Founder_Grotesk_X-Condensed"] uppercase pt-10 pr-10 font-semibold'>
            we are SkillC we are SkillC
          </h1>
        </motion.div>
      </div>
    </div>
  );
}

export default Marque;
