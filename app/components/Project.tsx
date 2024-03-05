"use client"

import React, { useRef } from 'react'
import { projectsData } from '../lib/data';
import { motion, useScroll, useTransform } from 'framer-motion';

type ProjectPropps = (typeof projectsData)[number]
export default function Project({title, description, tags, imageUrl, linkUrl}: ProjectPropps) {
 const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
  target: ref,
  offset: ["0 1", "1.33 1"]
 })
 const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1])
 const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1])
  const tagArray = tags.map((tag, index) => (
    <li
      className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full"
      key={index}>{tag}</li>
  ))
  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      className="group mb-3 sm:mb-8 last:mb-0"
      >
       <a href={linkUrl}>
        <section className="relative bg-gray-100 max-w-[42rem] rounded-lg border border-black/5 overflow-hidden sm:pr-8 sm:h-[24rem] last:mb-0  even:pl-8 hover:bg-gray-200 transition sm:group-even:pl-8">
          <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full group-even:ml-[18rem]">
            <h3 className="text-2xl font-semibold">{title}</h3>
            <p className="mt-2 leading-relaxed text-gray-700">{description}</p>
            <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
              {tagArray}
            </ul>
          </div>
          <img
            className="absolute top-8 -right-40 rounded-md w-[28.25rem] shadow-2xl
            transition
            group-hover:-translate-x-3
            group-hover:translate-y-3
            group-hover:-rotate-2
            group-hover:scale-[1.04]

            group-even:group-hover:translate-x-3
            group-even:group-hover:translate-y-3
            group-even:group-hover:rotate-2
            group-even:right-[initial]
            group-even:-left-40"
            src={`./images/${imageUrl}`}
            alt="Project I worked on"/>
        </section>
        </a>
    </motion.div>
  )
}
