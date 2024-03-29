"use server";

import React from "react";
import { Resend } from "resend";
import { validateString, getErrorMessage } from "../lib/utils";
import ContactFormEmail from "../email/contact-form-email";

const resend = new Resend(process.env.REACT_APP_RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");
  console.log("sending message")
  if (!validateString(senderEmail, 500)) {
    return {
      error: "Invalid sender email",
    };
  }
  if (!validateString(message, 500))  {
    return {
      error: "Invalid message",
    };
  }

  let data;
  try {
    await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "naotoabe1@gmail.com",
      subject: "Message from contact form",
      reply_to: senderEmail as string,
      react: React.createElement(ContactFormEmail, {
        message: message,
        senderEmail: senderEmail
      })
    });
    console.log("log after running email.send")
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }
  return {
    data,
  };
};