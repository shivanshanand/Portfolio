/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";

const Logo = () => {
  return (
    <motion.div
      whileHover={{
        rotate: 360,
        scale: 1.1,
      }}
      transition={{
        duration: 1.2,
        type: "spring",
      }}
      className="w-14 h-14 relative"
    >
      <svg
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute w-full h-full"
      >
        <defs>
          <filter id="distort">
            <feTurbulence
              type="turbulence"
              baseFrequency="0.01"
              numOctaves="3"
              result="turbulence"
            />
            <feDisplacementMap
              in2="turbulence"
              in="SourceGraphic"
              scale="10"
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>
        </defs>
        <circle
          cx="100"
          cy="100"
          r="90"
          fill="none"
          stroke="cyan"
          strokeWidth="10"
          filter="url(#distort)"
        />
      </svg>

      <a href="/" className="w-full h-full flex items-center justify-center rounded-full bg-black border-2 border-cyan-400 text-cyan-400 font-bold text-lg drop-shadow-[0_0_8px_rgba(34,211,238,0.7)] relative z-10 hover:cursor-pointer">
        SA
      </a>
    </motion.div>
  );
};

export default Logo;
