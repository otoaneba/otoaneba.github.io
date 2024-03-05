"use client"

import React from 'react'
import SectionHeading from './SectionHeading'
import { FaPaperPlane } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { useSectionInView } from '../lib/Hooks'
import toast from "react-hot-toast";
import { sendEmail } from '../actions/sendEmail'

export default function Contact() {

  const { ref } = useSectionInView("Contact");
  return (
    <motion.section
      id="contact"
      ref={ ref }
      className="mb-20 sm:mb-28 w-[min(100%, 38rem)] text-center"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1.25,
      }}
      viewport={{
        once: true,
      }}>
      <SectionHeading heading='Contact'></SectionHeading>
      <p className="text-gray-700 -mt-6">Please contact me directly at <a className="underline" href="mailto:naotoabe1@gmail.com">naotoabe1@gmail</a> or through this form</p>
      <form
        className="mt-10 flex flex-col"
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);

          if (error) {
            toast.error(error);
            return;
          }

          toast.success("Email sent successfully!");
        }}>
        <input
          name="senderEmail"
          placeholder="   Your email"
          className=" h-14 rounded-lg border borderBlack mb-2"
          type="email"
          required
          maxLength={500} />
        <textarea
          name="message"
          placeholder="Your message"
          className="h-52 borderBlack p-4"
          required
          maxLength={500}/>
        <button
          className="buttons-main hover:bg-gray-900  hover:text-white group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all mt-2">
            Submit<FaPaperPlane className="text-xs opacity-70 transition-all buttons group-hover: translate-x-1 group-hover:-translate-y-1"/></button>
      </form>
    </motion.section>
  )
  }
