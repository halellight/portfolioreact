import React, { useState, useEffect, useRef } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { motion, AnimatePresence } from "framer-motion";
import RevealLinks from "./RevealLinks";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const buttonRef = useRef(null);

  const handleNav = () => {
    setNav(!nav);
    setIsActive(!isActive);
  };
  const closeNav = () => {
    setNav(false);
    setIsActive(false);
  };

  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formattedTime = currentTime.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div className="fixed top-0 left-0 w-full p-1 bg-[#001B19] text-[#afa18f] flex justify-between items-center  z-50">
      <div className="max-w-[1240px] mx-auto p-4 flex justify-between items-center gap-[100px] md:gap-[200px] lg:gap-[450px]">
        <div className="flex items-center cursor-pointer">
          <a href="landing" className="text-xl md:text-3xl font-bold">
            <span hre className="text-[#00A699]">
              .
            </span>
            halel
          </a>
        </div>
        <div className="md:flex items-center space-x-4">
          <span className="p-2 text-gray-500 text-[10px] md:text-lg lg:text-xl ">
            [ABJ]
            <motion.span
              animate={{ opacity: [1, 0.65, 1] }}
              transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
              className="text-[#00A699] font-bold text-[10px] md:text-lg lg:text-xl"
            >
              {formattedTime}
            </motion.span>
          </span>
        </div>
        <div
          onClick={handleNav}
          ref={buttonRef}
          className="block z-50 cursor-pointer  items-center"
        >
          <div
            className={`relative w-6 h-0.5 bg-[#afa18f] transition-transform duration-300 ${
              isActive ? "rotate-45 translate-y-1" : ""
            }`}
          ></div>
          <div
            className={`relative w-4 h-0.5 bg-[#afa18f] my-1 transition-transform duration-300 ${
              isActive ? "opacity-0" : "opacity-100"
            }`}
          ></div>
          <div
            className={`relative w-6 h-0.5 bg-[#afa18f] transition-transform duration-300 ${
              isActive ? "-rotate-45 -translate-y-1" : ""
            }`}
          ></div>
        </div>
      </div>

      <AnimatePresence>
        {nav && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="fixed top-0 left-0 w-full h-full bg-[#141414] border-r border-r-gray-900 text-[#afa18f] z-40"
            onClick={closeNav}
          >
            {/* <ul className="flex flex-col items-center justify-center h-full space-y-4 text-5xl">
              <li className="p-4 cursor-pointer text-[96px] text-[#00A699]">
                Home
              </li>
              <li className="p-4 cursor-pointer text-[96px]">Projects</li>
              <li className="p-4 cursor-pointer text-[96px]">About</li>
              <li className="p-4 cursor-pointer text-[96px]">Contact</li>
              
            </ul> */}
            <RevealLinks />
            <div className="max-w-[1240px] mx-auto p-4 flex justify-between items-center gap-[48px] text-sm">
              <a href="https://x.com/_Halel">X</a>
              <a href="https://www.instagram.com/ui.halel?igsh=MWg2cmxkZWk1b21jMw==">
                Instagram
              </a>
              <a href="https://dribbble.com/_Halel">Dribble</a>
              <a href="https://www.linkedin.com/in/praise-ibe-3556a625b/">
                LinkedIn
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
