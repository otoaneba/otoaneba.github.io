"use client"

import React from 'react'
import { motion } from "framer-motion"
import SectionHeading from './SectionHeading'
import { useSectionInView } from '../lib/Hooks'


export default function About() {
  const { ref } = useSectionInView("About", 0.6);
  return (
    <motion.section
    className="mb-28 max-2-[45rem] max-w-[50rem] text-center leading-8 sm:mb-40 scroll-mt-28 "
    initial={{opacity: 0, y: 100}}
    animate={{opacity: 1, y: 0}}
    transition={{delay: 0.175}}
    id="about"
    ref={ref}>
      <SectionHeading heading='About me' />
      <p className="mb-3">
        After graduating with a degree in{" "}
        <span className="font-medium">Film</span>, I discovered a
        passion for programming. I enrolled at Georgia Institute of Technology, and got my Computer Science degree focusing on{" "}
        <span className="font-medium">human-computer-interaction</span>.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> creating things that can be useful in My core stack
        is{" "}
        <span className="font-medium">
          React, Angular, Next.js, NestJS, Express.js, Node.js, postgreSQL, and MongoDB
        </span>
        . I am also familiar with TypeScript and Prisma. I am always looking to
        learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        hanging out with my family, cooking and eating, playing guitar, playing video games, watching movies, and playing with my cat. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning {" "}
        <span className="font-medium">mandarin Chinese</span>. I'm also
        learning how to play the guitar.
      </p>
    </motion.section>
  )
}
