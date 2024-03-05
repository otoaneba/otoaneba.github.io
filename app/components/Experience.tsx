"use client"

import React from 'react'
import SectionHeading from './SectionHeading'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import { experiencesData } from '../lib/data'
import 'react-vertical-timeline-component/style.min.css'
import { useSectionInView } from '../lib/Hooks'

export default function Experience() {
  const { ref } = useSectionInView("Experience");
  const experiences = experiencesData.map((experience, index) => (
    
    <React.Fragment key={index}>
      <VerticalTimelineElement
        visible={true}
        contentStyle={{
          background: "#f3f4f6",
          boxShadow: "none",
          border: "1px solid rgba(0, 0, 0, 0.05)",
          textAlign: "left",
          padding: "1.3rem 2rem",
        }}
        contentArrowStyle={{
          borderRight: "0.4rem solid #9ca3af",
        }}
        date={experience.date}
        icon={experience.icon}
        iconStyle={{
          background:"white",
          fontSize: "1.5rem"
        }}
        >
        <h3 className="font-semibold">{experience.title}</h3>
        <p className="font-normal !mt-0">{experience.location}</p>
        <p className="!font-light !mt-1">{experience.description}</p>
      </VerticalTimelineElement>
    </React.Fragment>
  ))
  return (
    <section
    ref={ ref }
      className="scroll-mt-28 mb-28 sm:mb-40"
      id="experience">
      <SectionHeading heading='experience'></SectionHeading>
      <VerticalTimeline lineColor=''>{experiences}</VerticalTimeline>
    </section>
  )
}
