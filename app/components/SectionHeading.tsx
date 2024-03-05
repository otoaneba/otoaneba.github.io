"use client"

import React from 'react'
import { motion } from "framer-motion"

type SectionHeadingProp = { heading: string };

export default function SectionHeading(props: SectionHeadingProp) {
  return (
    <motion.h2
      className="text-3xl font-medium capitalize mb-8 text-center"
      initial={{opacity: 0, y: 100}}
      animate={{opacity: 1, y: 0}}
      transition={{delay: 0.25}}>{props.heading}</motion.h2>
  )
}
