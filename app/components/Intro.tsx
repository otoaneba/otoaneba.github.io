"use client"

import React from 'react'
import { motion } from "framer-motion";
import Link from 'next/link';
import { BsArrowRight, BsGithub, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { useSectionInView } from '../lib/Hooks';
import { useActiveSectionContext } from '../context/ActiveSectionContextProvider'; 

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
      id="home"
      ref={ref}>
      <div className="flex items-center justify-center">
        <div className="relative">
            <motion.img 
              className="profile-img"
              src="/images/naoto-sm.png"
              width="150"
              height="150"
              alt="Naoto smiling at the camera with a cup of coffee."
              initial={{opacity: 0, scale: 0}}
              animate={{opacity: 1, scale: 1}}
              transition={{type: "tween", duration: 0.2}}
            />
          <motion.span 
            className="absolute bottom-0 right-1 text-4xl"
            initial={{opacity: 0, scale: 0}}
            animate={{opacity: 1, scale: 1}}
            transition={{type: "spring", stiffness: 100, delay: 0.1, duration: 0.7}}
          >
            👋
          </motion.span>
        </div>
      </div>
      <motion.h1
        className="pt-5 px-4 text-2xl font-me !leading-[1.5] sm:text-4xl mb-10"
        initial={{opacity: 0, y: 100}}
        animate={{opacity: 1, y: 0}}
      >
        <span className="font-bold">Hello, I'm Naoto. </span>I'm a
        <span className="font-bold">{" "}full-stack developer</span> with
        <span className="font-bold">{" "}over 5 years</span> of experience. I enjoy building
        <span className="italic">{" "}websites & apps</span>. My focus is{" "}
        <span className="underline">React, Angular, NextJS,</span> and <span className="underline">NestJS </span>.
      </motion.h1>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-3 px-4 text-lg font-medium"
        initial={{opacity: 0, y: 100}}
        animate={{opacity: 1, y: 0}}
        transition={{delay: 0.1}}
      >
        <Link 
          href="#contact"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition">
            Contact me here<BsArrowRight className="opacity-70 group-hover:translate-x-2 transition" 
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now())
          }}/>
        </Link>
        <button>
          <a
            className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full buttons-main border border-black/7"
            href="./Naoto_Abe_swe_Resume.pdf" download>
              Download CV <HiDownload className="opacity-70 group-hover:translate-y-1 transition"/>
          </a>
        </button>
        <button>
          <a
            className="group bg-white text-gray-700 p-4 flex items-center gap-2 rounded-full buttons-main border border-black/8 "
            href="https://www.linkedin.com/in/naotoabe/">
              LinkedIn<BsLinkedin className="opacity-70"/>
          </a>
        </button>
        <button>
          <a
            className="group bg-white text-gray-700 p-4 flex items-center gap-2 text-[1.25rem] rounded-full buttons-main border border-black/8"
            href="https://github.com/otoaneba">
              Github<BsGithub className="opacity-70"/>
          </a>
        </button>
      </motion.div>
    </section>
  )
}
