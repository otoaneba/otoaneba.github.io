"use client"

import React from 'react'
import SectionHeading from './SectionHeading'
import { projectsData } from "../lib/data"
import Project from './Project'
import { useSectionInView } from '../lib/Hooks'

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.25);
  const projects = projectsData.map((project, index) => (
    <React.Fragment
      key={index}>
      <Project {...project}/>
    </React.Fragment>
  ))
  return (
    <section
      className="scroll-mt-28 mb-28"
      id="projects"
      ref={ref}>
      <SectionHeading heading='My projects'/>
      <div>{projects}</div>
    </section>
  )
}

